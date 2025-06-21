'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Your City, Country',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourprofile' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourusername' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/yourusername' }
  ];
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">
            Get In <span className="contact__title-highlight">Touch</span>
          </h2>
          <div className="contact__title-underline"></div>
          <p className="contact__description">
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s connect and discuss how we can work together!
          </p>
        </div>

        <div className="contact__content">
          {/* Contact Form */}
          <div className="contact__form-container">
            <h3 className="contact__form-title">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__label">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact__input"
                    placeholder="Your Name"
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact__input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject" className="contact__label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact__input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="contact__textarea"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-button ${
                  isSubmitting ? 'submit-button--loading' : ''
                }`}
              >
                <span>{isSubmitting ? 'Sending' : 'Send Message 📨'}</span>
              </button>

              {submitStatus === 'success' && (
                <div className="contact__success-message">
                  ✓ Message sent successfully! I will get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact__info">
            <div className="contact__info-section">
              <h3 className="contact__info-title">Let&apos;s Connect</h3>
              <p className="contact__info-description">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I&apos;d love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="contact__info-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="contact__info-card"
                >
                  <div className="contact__info-icon">{info.icon}</div>
                  <h4 className="contact__info-card-title">{info.title}</h4>
                  <p className="contact__info-card-value">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>            {/* Social Links */}
            <div className="contact__social">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="contact__availability">
              <div className="contact__availability-header">
                <div className="contact__availability-indicator"></div>
                <h4 className="contact__availability-title">Available for new projects</h4>
              </div>
              <p className="contact__availability-text">
                I&apos;m currently available for freelance work and new opportunities. 
                Let&apos;s discuss your next project!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
