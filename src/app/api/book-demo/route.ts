import { NextResponse } from 'next/server';
import { getSupabase } from '../../../lib/supabase';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  business: z.string(),
  email: z.string().email(),
  date: z.string().datetime(),
});

export async function POST(request: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !anonKey) {
    return NextResponse.json(
      { ok: false, error: 'Supabase credentials not configured' },
      { status: 500 }
    );
  }

  const supabase = getSupabase(Boolean(serviceKey));
  const body = await request.json();

  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ ok: false, error: result.error.errors[0].message }, { status: 400 });
  }

  const { name, business, email, date } = result.data;

  const { error } = await supabase.from('appointments').insert({
    client_name: name,
    business_name: business,
    client_email: email,
    appointment_time: date,
  });

  if (error) {
    let message = error.message;
    if (message.toLowerCase().includes('row level security')) {
      message =
        'Supabase row level security blocked inserting a new appointment. ' +
        'Either create an insert policy or provide SUPABASE_SERVICE_ROLE_KEY.';
    }
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
