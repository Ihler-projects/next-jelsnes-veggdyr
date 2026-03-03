'use client';

import { useState } from "react";
import { Button } from "../components/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Takk for din henvendelse! Vi tar kontakt så snart som mulig.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const inputStyle = {
    backgroundColor: 'var(--card-bg)',
    color: 'var(--foreground)',
    borderColor: 'var(--border)',
  };

  const labelStyle = {
    color: 'var(--foreground)',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 transition-colors" style={labelStyle}>
          Navn
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:border-transparent"
          style={{ ...inputStyle, outlineColor: 'var(--primary)' }}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 transition-colors" style={labelStyle}>
          E-post
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:border-transparent"
          style={{ ...inputStyle, outlineColor: 'var(--primary)' }}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2 transition-colors" style={labelStyle}>
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:border-transparent"
          style={{ ...inputStyle, outlineColor: 'var(--primary)' }}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 transition-colors" style={labelStyle}>
          Melding
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:border-transparent resize-none"
          style={{ ...inputStyle, outlineColor: 'var(--primary)' }}
        />
      </div>

      <Button type="submit" className="w-full">
        Send melding
      </Button>
    </form>
  );
}
