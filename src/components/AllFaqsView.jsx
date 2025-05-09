import React from "react";
import FAQSection from "./FAQSection";
import faqsGenerales from "./FaqPage";
import faqsEquipo from "./TeamFaqPage";
import CorreoSection from "./CorreoSection";
import FooterLinks from "./FooterLinks";

export default function AllFaqsView() {
  return (
    <div>
      <FAQSection title="Preguntas Generales" faqs={faqsGenerales} />
      <FAQSection title="Preguntas de Nuestro Equipo" faqs={faqsEquipo} />
      <CorreoSection />
      <FooterLinks />
    
    </div>
  );
}