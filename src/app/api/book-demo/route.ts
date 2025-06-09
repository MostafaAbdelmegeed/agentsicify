import { NextResponse } from 'next/server';
import { getSupabase } from '../../../lib/supabase';

export async function POST(request: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return NextResponse.json(
      { ok: false, error: 'Supabase credentials not configured' },
      { status: 500 }
    );
  }

  const supabase = getSupabase();
  const { name, business, email, date } = await request.json();

  const { error } = await supabase.from('appointments').insert({
    client_name: name,
    business_name: business,
    client_email: email,
    appointment_time: date,
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
