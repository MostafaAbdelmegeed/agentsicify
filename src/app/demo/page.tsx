'use client';
import { useEffect, useState, useMemo } from 'react';
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

  const availableTimezones = useMemo(() => {
    return Intl.supportedValuesOf('timeZone') as string[];
  }, []);

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    setTimezones(availableTimezones);
  }, [availableTimezones]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectedDateTime = useMemo(() => {
    if (!date || !time) return null;
    const [hours, minutes] = time.split(':').map(Number);
    return DateTime.fromJSDate(date, { zone: timezone })
      .set({ hour: hours, minute: minutes, second: 0 });
  }, [date, time, timezone]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name.trim() || !form.business.trim() || !form.email.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    if (!date || !time) {
      setError('Please select a date and time.');
      return;
    }
    
    if (!selectedDateTime) {
      setError('Invalid date or time selected.');
      return;
    }
    
    try {
      const res = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, date: selectedDateTime.toISO() }),
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
          onChange={(e) => {
            setError('');
            setTimezone(e.target.value);
          }}
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
            onChange={(value) => {
              setError('');
              setDate(value as Date);
            }}
            value={date}
            className="w-full rounded-md"
          />
          <TimePicker
            onChange={(value) => {
              setError('');
              setTime(value ?? '');
            }}
            value={time}
            className="w-full"
            clearIcon={null}
            clockIcon={null}
            disableClock
          />
          {selectedDateTime && (
            <p className="text-sm text-center">
              Selected: {selectedDateTime.toLocaleString(DateTime.DATETIME_FULL)}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={!date || !time}
          className={`bg-foreground text-background px-4 py-2 rounded-md w-full transition-colors ${
            !date || !time
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-[#383838] dark:hover:bg-[#ccc]'
          }`}
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
