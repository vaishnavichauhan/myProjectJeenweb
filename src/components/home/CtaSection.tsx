"use client";

import React from "react";
import CommonCta from "@/components/common/CommonCta";

export default function CtaSection() {
  return (
    <CommonCta
      id="consultation-cta"
      title={
        <>
          Secure Your Infrastructure. <br />
          <span className="text-blue-400">Optimize Your Growth.</span>
        </>
      }
      subtitle="You don't have to figure out your IT gaps alone. Reach out and talk directly with our engineering desk—we'll evaluate your current servers, ERP systems, and cloud platforms with complete technical transparency."
      buttonText="Speak with Performance Specialist"
      buttonHref="/contact"
    />
  );
}

