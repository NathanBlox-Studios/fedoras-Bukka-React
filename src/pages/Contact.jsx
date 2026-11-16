import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, subject, message } = formData;

    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('Please fill in all fields (Full Name, Email, Subject, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address (e.g., name@example.com).');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div>
      <div className="page-header">
        <h1>Contact & Orders</h1>
        <p>Place a bulk soup order, request a catering quote, or visit our Lekki kitchen.</p>
      </div>

      <div className="contact-layout">
        <div className="info-box">
          <h3>Kitchen & Delivery Info</h3>
          <p><strong>Address:</strong> Plot 14 Admiralty Way, Lekki Phase 1, Lagos</p>
          <p><strong>Phone:</strong> +234 809 555 0194</p>
          <p><strong>Email:</strong> orders@fedorasbukka.ng</p>
          <p><strong>Hours:</strong> Mon – Sun: 8:00 AM – 9:30 PM</p>
        </div>

        <div className="form-box">
          {submitted ? (
            <div className="success-box">
              <h3>Order / Inquiry Received!</h3>
              <p>
                Thank you, <strong>{formData.fullName}</strong>. Our Lekki kitchen team has received your
                message regarding <strong>&ldquo;{formData.subject}&rdquo;</strong> and will reply to{' '}
                <strong>{formData.email}</strong> shortly.
              </p>
              <button
                className="btn-secondary"
                style={{ marginTop: '14px' }}
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ fullName: '', email: '', subject: '', message: '' });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {error && <p className="error-msg">{error}</p>}

              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="e.g. Chinedu Okafor"
                value={formData.fullName}
                onChange={handleChange}
              />

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="e.g. chinedu@example.com"
                value={formData.email}
                onChange={handleChange}
              />

              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Weekend Catering Quote / Daily Order"
                value={formData.subject}
                onChange={handleChange}
              />

              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us what dishes you'd like or your event date & guest count..."
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}