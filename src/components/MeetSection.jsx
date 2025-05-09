import React, { useState, useEffect } from "react";
import "./styles/MeetSection.css";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";

export default function MeetSection() {
  const navigate = useNavigate();

  // Recuperar datos de la reunión
  const [meetingData, setMeetingData] = useState(null);
  useEffect(() => {
    const stored = localStorage.getItem("meetingData");
    if (stored) setMeetingData(JSON.parse(stored));
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [extra, setExtra] = useState("");
  // Host por defecto
  const hostEmail = "antezanaveronica9@gmail.com";
  // Enviar datos al backend y crear evento de Google Meet
  const handleConfirm = async () => {
    if (!email) {
      alert("Por favor, ingresa tu correo electrónico.");
      return;
    }
    const payload = {
      date: meetingData.date,
      time: `${meetingData.hour}:${meetingData.minute} ${meetingData.ampm}`,
      timezone: meetingData.timezone,
      hostEmail,
      attendeeEmail: email,
      firstName,
      lastName,
      phone,
      extra
    };

    try {
      const response = await fetch("http://localhost:5000/api/meetings/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Error al agendar");
      navigate('/meet-shedule');
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error al agendar la reunión.");
    }
  };

  const handleBackButtonClick = () => {
    navigate("/reunion");
  };

  if (!meetingData) return <p>Cargando datos de la reunión…</p>;
  // Mostrar fecha y hora seleccionadas
  const formattedDate = moment(meetingData.date)
    .locale('es')
    .format('dddd, D [de] MMMM [de] YYYY');
  const formattedTime = `${meetingData.hour}:${meetingData.minute} ${meetingData.ampm}`;

  return (
    <div className="free-reunion-container">
      <div className="left-reunion-section">
        <div className="start-reunion">
          <h1>¡Empecemos con tu pedido!</h1>
          <p>
            Agendemos una 30-min call para conocernos, darte la bienvenida y
            ponernos en marcha con un primer pedido.
          </p>
        </div>
        <div className="meeting-info">
          <h2>¿Qué haremos en nuestra primera reunión?</h2>
          <ul>
            <li>
              Una llamada de descubrimiento para conocer más sobre tu marca.
            </li>
            <li>
              Conocer cómo Grayola puede ayudarte a expandir tu equipo de
              diseño.
            </li>
            <li>Activar tu cuenta en Grayola y crear tu primer pedido.</li>
          </ul>
        </div>

        <div className="free-reunion-offer">
          <p>Sin compromisos, ni tarifas ocultas!</p>
          <p>
            ¡La mejor forma de conocernos es probándonos! durante el free trial
            realizaremos por ti tu primer pedido, 100% gratis para ti.
          </p>
        </div>
      </div>

      <div className="right-meet-section">
        <div className="meeting-form-card">
          <h2 className="form-title">Tu información</h2>
          <div className="form-date-edit">
           <span>{`${formattedDate} ${formattedTime}`}</span>
            <button className="edit-button">Editar</button>
          </div>

          <div className="meet-location">
            <span className="meet-icon">
              <span role="img" aria-label="Icono de marcador de ubicación">
                📍
              </span>
            </span>
            <span className="meet-text">Google Meet</span>
          </div>

          <form className="form-fields" onSubmit={e => e.preventDefault()}>
          <input
              type="text"
              placeholder="Nombre"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
           <input
              type="text"
              placeholder="Apellidos"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <input type="email" placeholder="Dirección de correo" value={email} onChange={e => setEmail(e.target.value)} required/>
            <input
              type="tel"
              placeholder="Número de teléfono"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <textarea placeholder="¿Algo más que deberíamos saber?" rows={3} value={extra}  onChange={e => setExtra(e.target.value)}/>
          </form>

          <div className="form-actions">
            <button className="btn-back" onClick={handleBackButtonClick}>
              Atrás
            </button>
            <button className="btn-confirm" onClick={handleConfirm}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
      <div className="calendar-image">
        <img src="/disegner_13.png" alt="foto" />
      </div>
    </div>
  );
}
