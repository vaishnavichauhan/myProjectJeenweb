"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  return (
        <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 p-2 bg-[#C11E23] hover:bg-[#A3161A] rounded-full shadow-lg transition-opacity hover:opacity-90"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6 text-white" />
    </button>
  );
}
