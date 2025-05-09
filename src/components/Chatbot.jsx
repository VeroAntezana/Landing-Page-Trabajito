import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./styles/Chatbot.css";

const Chatbot = forwardRef(({ onClose }, ref) => {
  // 1) capture the real div
  const containerRef = useRef(null);
  useImperativeHandle(ref, () => containerRef.current);

  // 2) keep track of messages
  const [messages, setMessages] = useState([
    { from: "bot", text: "Comunicate con nosotros" },
  ]);
  const [input, setInput] = useState("");

  // 3) send to backend
  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });
      const { reply } = await res.json();
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [
        ...m,
        { from: "bot", text: "Lo siento, hubo un error en el servidor." },
      ]);
    }
  };

  // 4) allow Enter key
  const onKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chatbot-container" ref={containerRef}>
      <div className="chatbot-header">
        Chat con nosotros
        <button onClick={onClose}>Cerrar</button>
      </div>
      <div className="chatbot-body">
        {messages.map((m, i) => (
          <p key={i} className={m.from}>
            {m.text}
          </p>
        ))}
      </div>
      <div className="chatbot-footer">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
});

export default Chatbot;
