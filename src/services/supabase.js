import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dpzodorszbmukgyzxcgm.supabase.co";
const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
