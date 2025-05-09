
import React, { useState, useEffect, useMemo } from "react";
import moment from "moment-timezone";
import "./styles/ReunionSection.css";
import { useNavigate } from 'react-router-dom';

export default function ReunionSection() {
  const navigate = useNavigate();

  const defaultZone = moment.tz.guess();
  const nowInZone = moment().tz(defaultZone);
  const initialHour = nowInZone.format("h");
  const initialMinute = nowInZone.format("mm");
  const initialAMPM = nowInZone.format("A");

  const [meetingDate, setMeetingDate] = useState(null);

  const [selectedTimezone, setSelectedTimezone] = useState(defaultZone);
  const [selectedHour, setSelectedHour] = useState(initialHour);
  const [selectedMinute, setSelectedMinute] = useState(initialMinute);
  const [selectedAMPM, setSelectedAMPM] = useState(initialAMPM);
  const [isTimezoneOpen, setIsTimezoneOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
 
  useEffect(() => {
    const stored = localStorage.getItem("meetingData");
    if (stored) {
      const { date } = JSON.parse(stored);
      setMeetingDate(date);
    }
  }, []);
  //Lista de las zonas horarias
  const timezoneOptions = useMemo(
    () => moment.tz.names(),
    []
  );
    // Reloj que actualiza cada minuto
  useEffect(() => {
    const updateClock = () => {
      const nowInZone = moment().tz(selectedTimezone);
      setCurrentTime(nowInZone.format("hh:mm A"));
    };
    updateClock();
    const timer = setInterval(updateClock, 60000);
    return () => clearInterval(timer);
  }, [selectedTimezone]);
  // Handlers
  const handleHourChange   = e => setSelectedHour(e.target.value);
  const handleMinuteChange = e => setSelectedMinute(e.target.value);
  const handleAMPMChange   = ampm => setSelectedAMPM(ampm);

  const toggleTimezoneDropdown = () => setIsTimezoneOpen(o => !o);
  const selectTimezone = (tz) => {
    setSelectedTimezone(tz);
    setIsTimezoneOpen(false);
  };
    // Navegación
  const handleNextButtonClick = () => {
    const meetingData = {
      date: meetingDate,
      hour: selectedHour,
      minute: selectedMinute,
      ampm: selectedAMPM,
      timezone: selectedTimezone
    };
    localStorage.setItem("meetingData", JSON.stringify(meetingData));
    navigate('/meet'); 
  };
  const handleBackButtonClick = () => {
    navigate('/free-trial'); 
  };
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
      <div className="right-reunion-section">
        <div className="scheduling-container">
          <div className="scheduling-header">
            <p>Duración de la reunión</p>
            <p>30 minutos</p>
          </div>
          <div className="scheduling-question">
            <p>¿A qué hora puedes?</p>
            <p>
                Mostrando los horarios para el{' '}
                {moment(meetingDate)
                  .locale('es')
                  .format('dddd, D [de] MMMM [de] YYYY')}
              </p>
          </div>
          
          <div
            className={`timezone-selector ${isTimezoneOpen ? "open" : ""}`}
            onClick={toggleTimezoneDropdown}>
            
            <div className="tz-info">
            <p>{selectedTimezone}</p>
            <span className="current-clock">{currentTime}</span>
            </div>
            <div className="dropdown-arrow">&#9660;</div>
            {isTimezoneOpen && (
              <ul className="timezone-dropdown">
                {timezoneOptions.map((tz) => (
                  <li
                    key={tz}
                    onClick={() => selectTimezone(tz)}
                  >
                    {tz}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="time-input">
            <label htmlFor="hour">Enter time</label>
            <div className="time-select">
              <input
                type="number"
                id="hour"
                value={selectedHour}
                onChange={handleHourChange}
                min="1"
                max="12"
              />
              <span className="separator">:</span>
              <input
                type="number"
                id="minute"
                value={selectedMinute}
                onChange={handleMinuteChange}
                min="00"
                max="59"
                step="1"
              />
              <div className="ampm-buttons">
                <button
                  className={selectedAMPM === "AM" ? "active" : ""}
                  onClick={() => handleAMPMChange("AM")}
                >
                  AM
                </button>
                <button
                  className={selectedAMPM === "PM" ? "active" : ""}
                  onClick={() => handleAMPMChange("PM")}
                >
                  PM
                </button>
              </div>
            </div>
            <div className="time-labels">
              <span>Hour</span>
              <span>Minute</span>
             
            </div>
          </div>
          <div className="scheduling-buttons">
            <button className="back-button" onClick={handleBackButtonClick}>Atrás</button>
            <button className="next-button" onClick={handleNextButtonClick}>Siguiente</button>
            
          </div>
        </div>
      </div>
      <div className="calendar-image">
        <img src="/disegner_13.png" alt="foto" />
      </div>
    </div>
  );
}
