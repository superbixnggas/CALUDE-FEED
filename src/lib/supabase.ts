import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Feed {
  id: string;
  title: string;
  summary: string;
  content: string;
  avatar_type: string;
  category: string | null;
  created_at: string;
  published_at: string;
}
