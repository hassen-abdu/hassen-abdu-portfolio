import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const ContactForm: React.FC = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Business Website",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.validation.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.validation.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.validation.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    const API_URL = import.meta.env.VITE_CONTACT_API_URL;

    try {
      if (API_URL) {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            projectType: formData.projectType,
            message: formData.message.trim(),
            timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error("API request failed");
        }

        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        // If API_URL is not set yet, attempt endpoint or inform user cleanly without fake success claims
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            projectType: formData.projectType,
            message: formData.message.trim(),
            timestamp: new Date().toISOString(),
          }),
        }).catch(() => null);

        if (response && response.ok) {
          setIsSubmitting(false);
          setSubmitted(true);
        } else {
          setIsSubmitting(false);
          setSubmitError(
            t.contact.form.errorMessage ||
              "Unable to send your inquiry right now. Please try again or reach out directly by phone."
          );
        }
      }
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError(
        t.contact.form.errorMessage ||
          "Unable to send your inquiry right now. Please try again or reach out directly by phone."
      );
    }
  };

  const projectOptions =
    language === "am"
      ? [
          { value: "Business Website", label: "የድርጅት / ንግድ ድር ጣቢያ (Business Website)" },
          { value: "E-Commerce", label: "የኦንላይን ገበያ / ኢ-ኮመርስ (E-Commerce)" },
          { value: "Web Application", label: "ልዩ የዌብ አፕሊኬሽን (Web Application)" },
          { value: "Admin Dashboard", label: "የአድሚን ዳሽቦርድ (Admin Dashboard)" },
          { value: "Other", label: "ሌላ አገልግሎት (Other)" },
        ]
      : [
          { value: "Business Website", label: "Business Website" },
          { value: "E-Commerce", label: "E-Commerce" },
          { value: "Web Application", label: "Web Application" },
          { value: "Admin Dashboard", label: "Admin Dashboard" },
          { value: "Other", label: "Other" },
        ];

  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-xl">
      <h3 className="font-display text-xl font-bold text-white mb-2">
        {t.contact.form.heading}
      </h3>
      <p className="text-zinc-400 text-xs sm:text-sm mb-6">
        {t.contact.form.subheading}
      </p>

      {submitted ? (
        <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-display text-lg font-bold text-white">
            {t.contact.form.successMessage}
          </h4>
          <button
            onClick={() => {
              setSubmitted(false);
              setSubmitError(null);
              setFormData({
                name: "",
                email: "",
                projectType: "Business Website",
                message: "",
              });
              setErrors({});
            }}
            className="mt-2 text-xs font-mono font-semibold text-emerald-400 underline hover:text-emerald-300"
          >
            {language === "am" ? "ሌላ መልእክት ላክ" : "Send Another Message"}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {submitError && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-start gap-2 animate-fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-medium text-zinc-300 mb-1.5"
            >
              {t.contact.form.fullNameLabel} <span className="text-emerald-400">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              placeholder={t.contact.form.fullNamePlaceholder}
              className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950 border text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.name ? "border-rose-500/80 focus:ring-rose-500" : "border-zinc-800"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-rose-400">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-medium text-zinc-300 mb-1.5"
            >
              {t.contact.form.emailLabel} <span className="text-emerald-400">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              placeholder={t.contact.form.emailPlaceholder}
              className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950 border text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.email ? "border-rose-500/80 focus:ring-rose-500" : "border-zinc-800"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
            )}
          </div>

          {/* Project Type Dropdown */}
          <div>
            <label
              htmlFor="contact-project-type"
              className="block text-xs font-medium text-zinc-300 mb-1.5"
            >
              {t.contact.form.serviceLabel}
            </label>
            <select
              id="contact-project-type"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            >
              {projectOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-zinc-900 text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-medium text-zinc-300 mb-1.5"
            >
              {t.contact.form.messageLabel} <span className="text-emerald-400">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              placeholder={t.contact.form.messagePlaceholder}
              className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950 border text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none ${
                errors.message ? "border-rose-500/80 focus:ring-rose-500" : "border-zinc-800"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 active:scale-[0.98]"
            id="contact-submit-btn"
          >
            {isSubmitting ? (
              <span>{t.contact.form.submittingBtn}</span>
            ) : (
              <>
                <span>{t.contact.form.submitBtn}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
