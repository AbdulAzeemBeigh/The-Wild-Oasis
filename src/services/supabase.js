import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vbxxxrscdhrrlvfqbsmk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZieHh4cnNjZGhycmx2ZnFic21rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1NjYyNzUsImV4cCI6MjAyODE0MjI3NX0.qjOuSwrRC8R6F2lMpqb0BfJK8XelR8wgBPSOtmIGywc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
