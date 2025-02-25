// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kvsdkvmhosslcgdavmat.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2c2Rrdm1ob3NzbGNnZGF2bWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NDU1NDUsImV4cCI6MjA1NTQyMTU0NX0.HKY7QKVc9xN_AsoTk0bXRbA67lqWK_gff7gx7xoMDz8';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
