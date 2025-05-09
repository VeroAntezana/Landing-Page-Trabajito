import React, { useState,useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';
import HeroSection from './components/HeroSection';
import HeroSection2 from './components/HeroSection2';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import faqsGenerales from './components/FaqPage';
import faqsEquipo from './components/TeamFaqPage';
import CorreoSection from './components/CorreoSection';
import FooterLinks from './components/FooterLinks';
import SocialSection from './components/SocialSection';
import CopyrightSection from './components/CopyrightSection';
import FreeTrialView from './components/FreeTrialView';
import ReunionSection from './components/ReunionSection';
import MeetSection from './components/MeetSection';
import MeetingScheduled from './components/MeetingScheduled';
import AllFaqsView from './components/AllFaqsView';
import ChatbotIcon from './components/ChatbotIcon'; 
import Chatbot from './components/Chatbot'; 

import BillingAndOrderContainer from './components/BillingAndOrderContainer';
import AplicantSection from './components/AplicantSection';
import HeaderSwitcher from './components/HeaderSwitcher'

function HomePage() {
  return (
    <>
      <HeroSection/>
      <HeroSection2/>
      <BenefitsSection/>
      <ServicesSection/>
      <PricingSection/>
      <TestimonialsSection/>
      {/* FAQ Generales */}
      <FAQSection title="General" faqs={faqsGenerales}/>
      {/* FAQ Nuestro Equipo */}
      <FAQSection title="Nuestro equipo" faqs={faqsEquipo}/>
      <CorreoSection/>
      <FooterLinks/>
      <SocialSection/>
      <CopyrightSection/>
      <BillingAndOrderContainer/>
    </>
  );
}


function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const chatbotRef = useRef(null);

  const handleChatbotToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleChatbotClose = () => {
    setIsChatbotOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isChatbotOpen && chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        handleChatbotClose();
      }
    };

    if (isChatbotOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Limpieza al desmontar el componente
    };
  }, [isChatbotOpen]);
  return (
    <Router>
      <HeaderSwitcher />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/company" element={<HomePage />} />
         <Route path="/free-trial" element={<FreeTrialView />} />
         <Route path="/reunion" element={<ReunionSection />}/>
         <Route path="/meet" element={<MeetSection />} />
         <Route path="/meet-shedule" element={<MeetingScheduled />} />
         <Route path="/beneficios" element={<BenefitsSection />} />
         <Route path="/pricing" element={<PricingSection />} />
         <Route path="/preguntas" element={<AllFaqsView />} /> 
         <Route path="/aplicant" element={<AplicantSection />} />
      </Routes>
      <ChatbotIcon onClick={handleChatbotToggle} /> {/* Renderiza el icono */}
      {isChatbotOpen && <Chatbot onClose={handleChatbotClose} ref={chatbotRef}/>}
    </Router>
  );
}

export default App;
