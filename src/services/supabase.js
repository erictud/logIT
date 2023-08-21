import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zixqegipvospxofdkten.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppeHFlZ2lwdm9zcHhvZmRrdGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2MjU3NzQsImV4cCI6MjAwODIwMTc3NH0.I4Aj8ahOEIlaeN4KQGX_RvQM8M4BNFZ-EkZhObVlG7A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
