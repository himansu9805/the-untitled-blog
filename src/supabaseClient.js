import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uvfyunlyeaptinpnrnjj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTQ5MDQ5NiwiZXhwIjoxOTUxMDY2NDk2fQ.VkxQIUH78qRZeCeW4vsx-4IfNN6-IxHFkZP-o7hDero";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);