'use client';
import { useState } from 'react';
import { CONTACT_EMAIL } from '../../lib/config';

export default function Demo() {
  const [form, setForm] = useState({ name: '', business: '', email: '', date: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\nPreferred date: ${form.date}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=Demo%20Request&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="max-w-lg mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-semibold">Book a Demo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" required className="w-full border p-2" value={form.name} onChange={handleChange}/>
        <input type="text" name="business" placeholder="Business" required className="w-full border p-2" value={form.business} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Email" required className="w-full border p-2" value={form.email} onChange={handleChange}/>
        <input type="datetime-local" name="date" className="w-full border p-2" value={form.date} onChange={handleChange}/>
        <button type="submit" className="bg-foreground text-background px-4 py-2">Submit</button>
      </form>
    </div>
  );
}
