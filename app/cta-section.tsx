'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Calendar, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { siteConfig } from '@/lib/config';

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section background="gradient" ref={ref} className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-burgundy-600/20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-burgundy-600/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[150px]" />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-gold-500/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-40 bg-gradient-to-b from-gold-500/50 to-transparent" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-eyebrow">Get Started</p>
            <h2 className="section-title-light mb-6">Schedule Your Free Consultation</h2>
            <div className="gold-divider mb-8" />

            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Every case begins with a conversation. Contact us today for a confidential consultation with one of our experienced attorneys. There is no obligation, and we are here to help.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <motion.a
                href={`tel:${siteConfig.phone}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 p-4 bg-navy-800/50 border border-navy-700 hover:border-gold-500/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-gold-500 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-navy-950" />
                </div>
                <div>
                  <p className="text-navy-300 text-sm">Call Us 24/7</p>
                  <p className="text-2xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${siteConfig.email}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4 p-4 bg-navy-800/50 border border-navy-700 hover:border-gold-500/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-navy-700 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                  <Mail className="w-6 h-6 text-gold-500 group-hover:text-navy-950 transition-colors" />
                </div>
                <div>
                  <p className="text-navy-300 text-sm">Email Us</p>
                  <p className="text-lg font-medium text-white group-hover:text-gold-400 transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {['Free Consultation', 'No Fee Unless We Win', 'Confidential', '24/7 Availability'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-navy-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 p-10 text-center"
              >
                <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-navy-950" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Thank You for Contacting Us
                </h3>
                <p className="text-navy-200 mb-6">
                  We have received your consultation request. A member of our team will contact you within 24 hours.
                </p>
                <a href={`tel:${siteConfig.phone}`}>
                  <button className="btn-premium">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now for Immediate Assistance
                  </button>
                </a>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 p-8"
              >
                <h3 className="text-xl font-serif font-bold text-white mb-6">
                  Request a Free Consultation
                </h3>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-premium"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-premium"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-300 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-premium"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Case Type */}
                  <div>
                    <label htmlFor="caseType" className="block text-sm font-medium text-navy-300 mb-2">
                      Type of Case *
                    </label>
                    <select
                      id="caseType"
                      name="caseType"
                      required
                      value={formData.caseType}
                      onChange={handleChange}
                      className="input-premium"
                    >
                      <option value="">Select a Practice Area</option>
                      <option value="personal-injury">Personal Injury</option>
                      <option value="medical-malpractice">Medical Malpractice</option>
                      <option value="criminal-defense">Criminal Defense</option>
                      <option value="family-law">Family Law</option>
                      <option value="civil-litigation">Civil Litigation</option>
                      <option value="employment-law">Employment Law</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Preferred Appointment */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-navy-300 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="input-premium"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-navy-300 mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="input-premium"
                      >
                        <option value="">Select a Time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 7PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-300 mb-2">
                      Brief Description of Your Case
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-premium resize-none"
                      placeholder="Please provide a brief description of your situation..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-premium flex items-center justify-center gap-3 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Free Consultation</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-navy-400 text-xs text-center mt-4">
                    By submitting this form, you agree to our privacy policy. Your information is kept strictly confidential.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
