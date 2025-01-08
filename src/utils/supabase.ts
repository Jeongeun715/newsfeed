import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fqlwvfdkrylqvntggqjg.supabase.co"; //내 주소 넣기
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
