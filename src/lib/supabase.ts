import { createClient } from '@supabase/supabase-js';

export function getSupabase(useServiceKey = false) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const key = useServiceKey
    ? process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      ''
    : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  return createClient(url, key);
}
