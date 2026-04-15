'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

// Note: Metadata can't be used in client components, so it's commented out
// export const metadata: Metadata = {
//   title: 'Contact - Matmon Technology',
//   description: 'Get in touch with Matmon Technology. Located in Kisumu, Kenya.',
// };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'colocation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: 'colocation',
        message: '',
      });
    }, 1000);
  };

  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="py-20 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Let&apos;s Talk
          </h1>
          <p className="text-xl text-foreground/70 mb-8 text-balance">
            Have questions about Matmon? Ready to get started? Interested in a partnership? We&apos;d love to hear from you.
          </p>
        </div>
      </SectionContainer>

      {/* Contact Form & Info */}
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card/50 p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              {submitted ? (
                <div className="rounded-lg border border-primary bg-primary/10 p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                  <p className="text-foreground/70 mb-4">
                    We&apos;ve received your message. Our team will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                      placeholder="+254..."
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                    >
                      <option value="colocation">Sovereign Colocation</option>
                      <option value="private-cloud">Private Cloud</option>
                      <option value="analytics">Managed Analytics</option>
                      <option value="iot">IoT & Edge Computing</option>
                      <option value="ai">AI Inference</option>
                      <option value="hybrid">Hybrid Cloud</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-2"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-xs text-foreground/50 text-center">
                    We&apos;ll respond within 24 hours during business hours.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Location */}
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Kisumu Office</h3>
                  <p className="text-sm text-foreground/70">
                    Data Center 1<br />
                    Kisumu, Kenya
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-start gap-4 mb-4">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-foreground/70">
                    <a href="mailto:info@matmon.tech" className="hover:text-accent transition-colors">
                      info@matmon.tech
                    </a>
                  </p>
                  <p className="text-sm text-foreground/70 mt-2">
                    <a href="mailto:support@matmon.tech" className="hover:text-accent transition-colors">
                      support@matmon.tech
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <div className="flex items-start gap-4 mb-4">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-foreground/70">
                    <a href="tel:+254" className="hover:text-accent transition-colors">
                      +254 (0) 700 000 000
                    </a>
                  </p>
                  <p className="text-xs text-foreground/60 mt-2">
                    24/7 Support Available
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <h3 className="font-semibold mb-3">Business Hours</h3>
              <dl className="text-sm space-y-2 text-foreground/70">
                <div className="flex justify-between">
                  <dt>Monday - Friday</dt>
                  <dd className="font-medium">8AM - 6PM EAT</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Saturday - Sunday</dt>
                  <dd className="font-medium">Emergency Only</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Support Available</dt>
                  <dd className="font-medium text-accent">24/7</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Map Section */}
      <SectionContainer className="bg-card/30">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Visit Us</h2>
          <p className="text-foreground/70">Located in Kisumu, Kenya</p>
        </div>

        <div className="rounded-lg border border-border overflow-hidden aspect-video bg-card">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 flex items-center justify-center">
            <p className="text-foreground/50">Map Location - Kisumu, Kenya</p>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              q: 'How quickly can we get started?',
              a: 'For colocation (Phase 0), you can be operational within 48 hours of signing an agreement. We handle all hardware setup and integration.',
            },
            {
              q: 'What is the minimum commitment?',
              a: 'Colocation starts with a single cabinet for 12 months. Pricing is flexible based on your needs. Contact us to discuss options.',
            },
            {
              q: 'Is my data really staying in Kenya?',
              a: 'Yes. By default, all data remains in Kenya. Cross-border transfers require explicit written consent and proper DPA documentation.',
            },
            {
              q: 'What happens if I need more capacity?',
              a: 'We can provision additional resources within days. There are no penalties for scaling up or down your infrastructure with advance notice.',
            },
            {
              q: 'Do you offer managed services?',
              a: 'Yes. Beyond colocation, we offer managed analytics, private cloud, and AI inference. Contact us to discuss your specific needs.',
            },
            {
              q: 'What about disaster recovery?',
              a: 'Redundancy is built into everything. Backups are maintained on-site. We recommend off-site backups with your explicit consent.',
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-lg border border-border bg-card/50 p-6">
              <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
              <p className="text-sm text-foreground/70">{item.a}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}
