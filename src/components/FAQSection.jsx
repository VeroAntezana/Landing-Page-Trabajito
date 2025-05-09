import React, { useState } from "react";
import "./styles/FAQSection.css";


export default function FAQSection({ title, faqs }) {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">{title}</h2>
        <div className="faq-items">
          {faqs.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
    <button className="faq-question" onClick={handleToggle}>
      <span>{question}</span>
      {isOpen ? (
        <svg
          fill="#fff"
          width="18px"
          height="18px"
          viewBox="0 -6 524 524"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>up</title>
          <path d="M460 321L426 355 262 192 98 355 64 321 262 125 460 321Z" />
        </svg>
      ) : (      
        <svg
          fill="#fff"
          width="18px"
          height="18px"
          viewBox="0 -6 524 524"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>down</title>
          <path d="M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z" />
        </svg>
      )}
    </button>
    {isOpen && (
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    )}
  </div>
  );
}
