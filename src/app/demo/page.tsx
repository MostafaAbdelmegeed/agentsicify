'use client';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import { CONTACT_EMAIL } from '../../lib/config';

export default function Demo() {
  const [form, setForm] = useState({ name: '', business: '', email: '' });
  const [date, setDate] = useState<Date | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateString = date ? date.toISOString() : '';
    const body = `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\nPreferred date: ${dateString}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=Demo%20Request&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center mb-6">Book a Demo</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-background border rounded-lg shadow p-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full border p-2 rounded-md focus:outline-none focus:ring"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="business"
          placeholder="Business"
          required
          className="w-full border p-2 rounded-md focus:outline-none focus:ring"
          value={form.business}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border p-2 rounded-md focus:outline-none focus:ring"
          value={form.email}
          onChange={handleChange}
        />
        <DateTimePicker
          onChange={setDate}
          value={date}
          className="w-full"
          clearIcon={null}
          format="y-MM-dd h:mm a"
        />
        <button
          type="submit"
          className="bg-foreground text-background px-4 py-2 rounded-md w-full hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
