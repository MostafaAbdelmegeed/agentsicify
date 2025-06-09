'use client';
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { useRouter } from 'next/navigation';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import './demo.css';

export default function Demo() {
  const [form, setForm] = useState({ name: '', business: '', email: '' });
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [timezone, setTimezone] = useState('');
  const [timezones, setTimezones] = useState<string[]>([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    setTimezones(Intl.supportedValuesOf('timeZone') as string[]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time) return;
    const [hours, minutes] = time.split(':').map(Number);
    const dt = DateTime.fromJSDate(date, { zone: timezone }).set({
      hour: hours,
      minute: minutes,
      second: 0,
    });
    try {
      const res = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, date: dt.toISO() }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Unexpected error');
      }
      router.push('/demo/success');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unexpected error';
      setError(message);
    }
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
        <select
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="w-full border p-2 rounded-md focus:outline-none focus:ring"
        >
          {timezones.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
        <div className="space-y-4">
          <Calendar
            onChange={(value) => setDate(value as Date)}
            value={date}
            className="w-full rounded-md"
          />
          <TimePicker
            onChange={(value) => setTime(value ?? '')}
            value={time}
            className="w-full"
            clearIcon={null}
            clockIcon={null}
            disableClock
          />
          {date && time && (
            <p className="text-sm text-center">
              Selected:{' '}
              {DateTime.fromJSDate(date, { zone: timezone })
                .set({
                  hour: Number(time.split(':')[0]),
                  minute: Number(time.split(':')[1]),
                  second: 0,
                })
                .toLocaleString(DateTime.DATETIME_FULL)}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-foreground text-background px-4 py-2 rounded-md w-full hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Submit
        </button>
      </form>
      {error && (
        <p className="text-red-600 mt-4 text-center" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
