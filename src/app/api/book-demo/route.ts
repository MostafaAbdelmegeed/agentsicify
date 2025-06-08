import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { CONTACT_EMAIL } from '../../../lib/config';

export async function POST(request: Request) {
  const { name, business, email, date } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: CONTACT_EMAIL,
    subject: 'New demo booking',
    text: `Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nPreferred date: ${date}`,
  });

  return NextResponse.json({ ok: true });
}
