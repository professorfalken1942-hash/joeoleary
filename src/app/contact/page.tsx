'use client';

import { Suspense, useState, FormEvent, ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function ContactContent() {
  const searchParams = useSearchParams();
  const isPortfolioAccess = searchParams.get('re') === 'portfolio-access';
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Message sent! Thank you for reaching out.');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('An error occurred. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section style={{
        paddingTop: "calc(56px + 4rem)",
        paddingBottom: "4rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        borderBottom: "1px solid var(--border)",
      }}>
        <p style={{
          fontSize: "0.75rem",
          color: "var(--mid)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "1rem",
        }}>
          Contact
        </p>
        <h1 style={{
          fontFamily: "var(--font-sans)",
          fontSize: "3.5rem",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}>
          {isPortfolioAccess ? 'Request Access' : 'Get in Touch'}
        </h1>
        {isPortfolioAccess ? (
          <p style={{ maxWidth: "640px", marginTop: "1.5rem", color: "var(--mid)", lineHeight: 1.75, fontWeight: 300 }}>
            Tell me who you are and what role or conversation this supports. I&apos;ll follow up with access details when appropriate.
          </p>
        ) : null}
      </section>

      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        maxWidth: "1200px",
      }} className="col-2">
        {/* Form */}
        <div style={{ padding: "4rem 2rem", borderRight: "1px solid var(--border)" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div className="contact-name-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div>
                <label htmlFor="firstName" style={labelStyle}>First Name</label>
                <input 
                  id="firstName"
                  type="text" 
                  name="firstName"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={inputStyle} 
                  required 
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                <input 
                  id="lastName"
                  type="text" 
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={inputStyle} 
                  required 
                  disabled={loading}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input 
                id="email"
                type="email" 
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle} 
                required 
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }} 
                required 
                disabled={loading}
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--white)",
                backgroundColor: loading ? "var(--mid)" : "var(--accent-tertiary)",
                border: "none",
                padding: "0.75rem 1.5rem",
                cursor: loading ? "not-allowed" : "pointer",
                alignSelf: "flex-start",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            
            {/* Status message */}
            {status !== 'idle' && (
              <div style={{
                padding: "1rem",
                borderRadius: "4px",
                backgroundColor: status === 'success' ? "#f0fdf4" : "#fef2f2",
                border: `1px solid ${status === 'success' ? '#86efac' : '#fecaca'}`,
                color: status === 'success' ? "#166534" : "#991b1b",
                fontSize: "0.9rem",
              }} role="status" aria-live="polite">
                {statusMessage}
              </div>
            )}
          </form>
        </div>

        {/* Info */}
        <div style={{ padding: "4rem 2rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {[
            { label: "Email", value: "joe@joeoleary.me" },
            { label: "LinkedIn", value: "linkedin.com/in/joseph-o-leary-976a945", href: "https://www.linkedin.com/in/joseph-o-leary-976a945/" },
            { label: "Based", value: "Syracuse, NY" },
          ].map((item) => (
            <div key={item.label} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem" }}>
              <p style={{
                fontSize: "0.7rem",
                color: "var(--mid)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}>
                {item.label}
              </p>
              <p style={{ fontSize: "0.9rem", fontWeight: 400 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactContent />
    </Suspense>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "0.7rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "var(--mid)",
  marginBottom: "0.5rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
  fontWeight: 300,
  color: "var(--black)",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid var(--border)",
  padding: "0.5rem 0",
};
