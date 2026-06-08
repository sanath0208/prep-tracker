-- Supabase SQL: Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New query)

-- User state table: one row per user, stores their full tracker state as JSONB
create table if not exists user_state (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  completed jsonb default '{}'::jsonb,
  notes jsonb default '{}'::jsonb,
  custom_tasks jsonb default '{}'::jsonb,
  difficulties jsonb default '{}'::jsonb,
  start_date text default null,
  current_week integer default 1,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Row Level Security: users can only access their own data
alter table user_state enable row level security;

create policy "Users can read own state"
  on user_state for select
  using (auth.uid() = user_id);

create policy "Users can insert own state"
  on user_state for insert
  with check (auth.uid() = user_id);

create policy "Users can update own state"
  on user_state for update
  using (auth.uid() = user_id);

-- Auto-create state row when a new user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.user_state (user_id)
  values (new.id);
  return new;
end;
$$ language plpgsql security definer;

-- Trigger on auth.users insert
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Updated_at auto-update
create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_user_state_updated_at
  before update on user_state
  for each row execute procedure public.update_updated_at();
