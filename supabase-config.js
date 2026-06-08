// Supabase client — replace these with your project values
// Get them from: Supabase Dashboard → Settings → API
const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // e.g. https://abc123.supabase.co
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // public anon key (safe for client)

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
