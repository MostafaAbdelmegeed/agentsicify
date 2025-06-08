'use client';
import { useState } from 'react';
import { CONTACT_EMAIL } from '../../lib/config';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${CONTACT_EMAIL}?subject=Contact%20Request&body=Name:%20${encodeURIComponent(form.name)}%0AEmail:%20${encodeURIComponent(form.email)}%0A%0A${encodeURIComponent(form.message)}`;
    window.location.href = mailto;
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-semibold">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" required className="w-full border p-2" value={form.name} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Email" required className="w-full border p-2" value={form.email} onChange={handleChange}/>
        <textarea name="message" placeholder="Message" required className="w-full border p-2" rows={4} value={form.message} onChange={handleChange}></textarea>
        <button type="submit" className="bg-foreground text-background px-4 py-2">Send</button>
      </form>
    </div>
  );
}
