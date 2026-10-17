import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles,
  AlertCircle,
  Building,
  Briefcase
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { submitContactMessage } from '../services/contactService';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  function handleCopy(text, field) {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
    onShowToast({
      type: 'success',
      message: `${field} copied to clipboard!`
    });
  }

  function validate() {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Message must be at least 15 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      onShowToast({ type: 'error', message: 'Please fix the errors in the form before sending.' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Try local Python backend first if running, otherwise use resilient contact service
      let res;
      try {
        const response = await fetch("http://127.0.0.1:5000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          res = await response.json();
        } else {
          res = await submitContactMessage(formData);
        }
      } catch {
        res = await submitContactMessage(formData);
      }

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }

      onShowToast({
        type: 'success',
        message: res.message || 'Message sent! Shubham will review and reply within 24 hours.'
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        subject: '',
        message: ''
      });
      setErrors({});

    } catch (err) {
      onShowToast({
        type: 'error',
        message: err.message || 'Failed to send message. Please email directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold uppercase mb-2">
            <Mail className="h-3.5 w-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Have a Data Problem Worth Exploring?
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Whether hiring for a Data Analyst or Power BI Developer role, or discussing dimensional data modeling, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info & Verification */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-7 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Get in Touch Directly
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Click any contact detail to copy directly to your clipboard.
              </p>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">Email Address</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs font-bold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'Email')}
                    className="p-2 rounded-xl text-slate-400 hover:text-cyan-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'Email' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">Phone / WhatsApp</span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'Phone number')}
                    className="p-2 rounded-xl text-slate-400 hover:text-emerald-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'Phone number' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
                  <div className="h-9 w-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Location</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors font-medium"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors font-medium"
                >
                  <Linkedin className="h-4 w-4 text-blue-500" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Availability Box */}
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-5 text-xs text-emerald-800 dark:text-emerald-300">
              <span className="font-bold flex items-center gap-1.5 mb-1 text-emerald-600 dark:text-emerald-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Notice Period & Opportunity Status:</span>
              </span>
              <p className="leading-relaxed">
                Available immediately for Full-Time Analyst positions, internships, and contract dashboard development projects.
              </p>
            </div>

          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 shadow-sm space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alexis Cook"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.name && <span className="text-[11px] text-rose-500 mt-1 block">{errors.name}</span>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {errors.email && <span className="text-[11px] text-rose-500 mt-1 block">{errors.email}</span>}
                </div>

              </div>

              {/* Company & Role (Optional for recruiters) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Analytics Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    <Building className="h-4 w-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Target Role / Context
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Power BI Developer / Data Analyst"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    <Briefcase className="h-4 w-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Interview Invitation — Data Analyst"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                    errors.subject ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                  }`}
                />
                {errors.subject && <span className="text-[11px] text-rose-500 mt-1 block">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  rows="4"
                  placeholder="Share details regarding your team's requirements, project scope, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors resize-y ${
                    errors.message ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                  }`}
                />
                {errors.message && <span className="text-[11px] text-rose-500 mt-1 block">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-lg shadow-cyan-600/25 transition-all disabled:opacity-50 hover:scale-101 cursor-pointer"
                >
                  <Send className={`h-4 w-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                  <span>{isSubmitting ? 'Dispatching Message...' : 'Send Message to Shubham'}</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2">
                <span>🔒 Secure client & backend sanitization</span>
                <span>Response SLA: &lt; 24h</span>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
