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
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-lg bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Book a Demo</h1>
          <p className="text-gray-600 dark:text-gray-400">Schedule your personalized AI consultation</p>
        </div>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-lg animate-pulse">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{error}</p>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:border-blue-400 transition-all duration-200 placeholder-transparent"
                placeholder="Full Name"
                required
              />
              <label className="absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400">
                Full Name
              </label>
            </div>
            
            <div className="relative group">
              <input
                type="text"
                name="business"
                value={form.business}
                onChange={handleChange}
                className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:border-blue-400 transition-all duration-200 placeholder-transparent"
                placeholder="Business Name"
                required
              />
              <label className="absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400">
                Business Name
              </label>
            </div>
            
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:border-blue-400 transition-all duration-200 placeholder-transparent"
                placeholder="Email Address"
                required
              />
              <label className="absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400">
                Email Address
              </label>
            </div>
            
            <div className="relative group">
              <select
                name="timezone"
                value={timezone}
                onChange={(e) => {
                  setError('');
                  setTimezone(e.target.value);
                }}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:border-blue-400 transition-all duration-200 appearance-none bg-white dark:bg-gray-800"
              >
                {timezones.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
              <label className="absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                Timezone
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </form>
        
        <div className="mt-8 space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Select Date & Time</h3>
            <Calendar
              onChange={(value) => {
                setError('');
                setDate(value as Date);
              }}
              value={date}
              minDate={new Date()}
              className="w-full modern-calendar"
              tileClassName="text-sm"
              navigationLabel={({ date }) =>
                `${date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`
              }
              formatShortWeekday={(locale, date) =>
                date.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 3)
              }
              showNeighboringMonth={false}
              calendarType="gregory"
            />
            
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Time
                </label>
                <TimePicker
                  onChange={(value) => {
                    setError('');
                    setTime(value ?? '');
                  }}
                  value={time}
                  format="h:mm a"
                  clockIcon={null}
                  disableClock
                  className="modern-time-picker"
                />
              </div>
            </div>
            
            {selectedDateTime && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Selected Appointment</p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      {selectedDateTime.toLocaleString(DateTime.DATETIME_FULL)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!date || !time}
          className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule Demo
          </span>
        </button>
      </div>
    </div>
  );
}
