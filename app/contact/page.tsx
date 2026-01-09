'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
} from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siteConfig, practiceAreas } from '@/lib/config';

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    practiceArea: '',
    message: '',
    howHeard: '',
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
            alt="Contact us"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/80" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-gold-500" />
              <span className="text-gold-400 text-sm font-medium">Get in Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Contact
              <span className="text-gold-400"> Us</span>
            </h1>

            <p className="text-xl text-navy-200 leading-relaxed">
              Ready to discuss your legal needs? Our team is here to help. Schedule
              a consultation or reach out directly to any of our offices.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form and Info */}
      <Section background="light" ref={formRef}>
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card variant="elevated" padding="lg">
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-2">
                  Schedule a Consultation
                </h2>
                <p className="text-navy-600 mb-8">
                  Fill out the form below and one of our attorneys will contact you
                  within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-navy-600 max-w-md mx-auto">
                      Your message has been received. One of our attorneys will
                      contact you within 24 hours to discuss your legal needs.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-navy-700 mb-2"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-navy-200 rounded-sm focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-navy-700 mb-2"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-navy-200 rounded-sm focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-navy-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-navy-200 rounded-sm focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-navy-700 mb-2"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-navy-200 rounded-sm focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors"
                          placeholder="(555) 555-5555"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-navy-700 mb-2"
                      >
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-sm focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors"
                        placeholder="Acme Corporation"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="practiceArea"
                        className="block text-sm font-medium text-navy-700 mb-2"
                      >
                        Practice Area of Interest *
                      </label>
                      <select
                        id="practiceArea"
                        name="practiceArea"
                        required
                        value={formData.practiceArea}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-sm focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors bg-white"
                      >
                        <option value="">Select a practice area</option>
                        {practiceAreas.map((area) => (
                          <option key={area.slug} value={area.name}>
                            {area.name}
                          </option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy-700 mb-2"
                      >
                        How Can We Help? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-sm focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors resize-none"
                        placeholder="Please describe your legal matter..."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="howHeard"
                        className="block text-sm font-medium text-navy-700 mb-2"
                      >
                        How Did You Hear About Us?
                      </label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        value={formData.howHeard}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-navy-200 rounded-sm focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-colors bg-white"
                      >
                        <option value="">Select an option</option>
                        <option value="referral">Referral</option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="publication">Publication/Article</option>
                        <option value="event">Event/Conference</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full md:w-auto"
                        isLoading={isSubmitting}
                      >
                        <Send className="mr-2 w-5 h-5" />
                        Submit Inquiry
                      </Button>
                    </div>

                    <p className="text-sm text-navy-500">
                      By submitting this form, you agree to our privacy policy. Your
                      information will be kept confidential.
                    </p>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Main Contact Card */}
              <Card variant="dark" padding="lg">
                <h3 className="text-xl font-serif font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-3 text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-gold-500" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gold-500" />
                    {siteConfig.email}
                  </a>
                  <div className="flex items-center gap-3 text-navy-300">
                    <Clock className="w-5 h-5 text-gold-500" />
                    Mon - Fri: 8:00 AM - 6:00 PM
                  </div>
                </div>
              </Card>

              {/* Office Locations */}
              <div>
                <h3 className="text-lg font-serif font-bold text-navy-900 mb-4">
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {siteConfig.locations.map((location) => (
                    <Card key={location.id} variant="elevated" padding="md">
                      <h4 className="font-bold text-navy-900 mb-2">{location.name}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2 text-navy-600">
                          <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p>{location.address}</p>
                            <p>
                              {location.city}, {location.state} {location.zip}
                            </p>
                          </div>
                        </div>
                        <a
                          href={`tel:${location.phone}`}
                          className="flex items-center gap-2 text-navy-600 hover:text-gold-600 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {location.phone}
                        </a>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Map Section (placeholder) */}
      <section className="h-96 bg-navy-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-navy-100">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-navy-400 mx-auto mb-4" />
            <p className="text-navy-600 text-lg">Interactive Map</p>
            <p className="text-navy-500 text-sm">
              Integration with Google Maps or Mapbox can be added here
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
