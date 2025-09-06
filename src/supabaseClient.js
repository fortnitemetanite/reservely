import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kvvxcbnnkeftpcqznzdo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2dnhjYm5ua2VmdHBjcXpuemRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxMjY1ODAsImV4cCI6MjA3MjcwMjU4MH0.9X8rsa5Qia2KV7d5d_kx_OV6XngqmlS4dPK9LH73cNs';

export const supabase = createClient(supabaseUrl, supabaseKey);