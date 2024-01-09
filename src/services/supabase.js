import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dpzodorszbmukgyzxcgm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwem9kb3JzemJtdWtneXp4Y2dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5MTMwNzcsImV4cCI6MjAxNjQ4OTA3N30.6tFXntmkZyuFOMOTi16sbbgrq_GdaKg_ej5Mx2Q6QwI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
