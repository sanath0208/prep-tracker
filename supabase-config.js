// Supabase client — replace these with your project values
// Get them from: Supabase Dashboard → Settings → API
const SUPABASE_URL = 'https://itdzhtosohcyjpxkwcff.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_0FysReclE0ZjQpm11tynWA_DHC0qMjo';

// Reassign the global supabase (from CDN) to the initialized client
supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
