import React, { useEffect } from "react";
import { X } from "lucide-react";
import { contactConfig } from "../config/contact";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden p-6 text-center space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
          aria-label="Close profile picture"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative inline-block mx-auto mt-2">
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur-md opacity-70" />
          <img
            src="/images/profile.jpg"
            alt={contactConfig.name}
            className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-zinc-800 shadow-2xl mx-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230f172a'/><circle cx='50' cy='35' r='20' fill='%2310b981'/><path d='M20 90 Q50 60 80 90' stroke='%2310b981' stroke-width='8' fill='none'/></svg>";
            }}
          />
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-white">
            {contactConfig.name}
          </h3>
          <p className="text-sm text-emerald-400 font-mono mt-1">
            {contactConfig.title}
          </p>
          <p className="text-xs text-zinc-400 mt-2">
            Addis Ababa, Ethiopia • Web Developer &amp; Full-Stack Systems Engineer
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
        >
          Close Viewer
        </button>
      </div>
    </div>
  );
};
