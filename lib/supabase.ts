import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export type Driver = {
  id: string; name: string; name_en: string; name_ko: string;
  category: 'rally' | 'dirt-trial' | 'both';
  bio: string; bio_en: string; bio_ko: string;
  image_url: string | null; instagram_url: string | null; twitter_url: string | null;
  monthly_goal: number; current_support: number; created_at: string;
};
