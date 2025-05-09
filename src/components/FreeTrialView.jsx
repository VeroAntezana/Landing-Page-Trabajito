import React,{useState} from "react";
import "./styles/FreeTrialView.css";
import { useNavigate } from 'react-router-dom';


function FreeTrialView() {
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentMonthName = currentDate.toLocaleString("default", { month: "short" });
  const today = new Date();

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    const daysInPrevMonth = getDaysInMonth(
      currentMonth === 0 ? currentYear - 1 : currentYear, 
      currentMonth === 0 ? 11 : currentMonth - 1
    );
    
    const calendarRows = [];
    let date = 1;
    let nextMonthDate = 1;
    
    // Current date for comparison (without time)
    const currentToday = new Date();
    currentToday.setHours(0, 0, 0, 0);
    
    // Create 6 rows max (to handle all possible month configurations)
    for (let i = 0; i < 6; i++) {
      const week = [];
      
      // 7 days per week
      for (let j = 0; j < 7; j++) {
        // Previous month days
        if (i === 0 && j < firstDayOfMonth) {
          const prevMonthDay = daysInPrevMonth - firstDayOfMonth + j + 1;
          week.push({
            day: prevMonthDay,
            isPrevMonth: true,
            isNextMonth: false,
            isCurrentMonth: false,
            isToday: false,
            isSelected: false,
            isPastDate: true
          });
        } 
        // Current month days
        else if (date <= daysInMonth) {
          const dateObj = new Date(currentYear, currentMonth, date);
          const isToday = 
            date === today.getDate() && 
            currentMonth === today.getMonth() && 
            currentYear === today.getFullYear();
          
          const isSelected = 
            selectedDate && 
            date === selectedDate.getDate() && 
            currentMonth === selectedDate.getMonth() && 
            currentYear === selectedDate.getFullYear();
          
          // Check if the date is in the past
          const isPastDate = dateObj < currentToday;
          
          week.push({
            day: date,
            isPrevMonth: false,
            isNextMonth: false,
            isCurrentMonth: true,
            isToday,
            isSelected,
            isPastDate
          });
          
          date++;
        } 
        // Next month days
        else {
          week.push({
            day: nextMonthDate,
            isPrevMonth: false,
            isNextMonth: true,
            isCurrentMonth: false,
            isToday: false,
            isSelected: false,
            isPastDate: true
          });
          nextMonthDate++;
        }
      }
      
      calendarRows.push(week);
      
      // Break if we've already displayed all days of the current month
      if (date > daysInMonth && i >= 3) {
        break;
      }
    }
    
    return calendarRows;
  };

  const calendarDays = generateCalendarDays();
  // Navigation handlers
  const handlePrevMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      
      // If going to a past month, make sure we don't go before current month
      const currentToday = new Date();
      if (newDate.getFullYear() < currentToday.getFullYear() || 
          (newDate.getFullYear() === currentToday.getFullYear() && 
           newDate.getMonth() < currentToday.getMonth())) {
        return new Date(currentToday.getFullYear(), currentToday.getMonth(), 1);
      }
      
      return newDate;
    });
  };
  
  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };
  
  const handlePrevYear = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      const newYear = prevDate.getFullYear() - 1;
      
      // Don't go before current year
      const currentToday = new Date();
      if (newYear < currentToday.getFullYear()) {
        return new Date(currentToday.getFullYear(), prevDate.getMonth(), 1);
      }
      
      newDate.setFullYear(newYear);
      return newDate;
    });
  };
  
  const handleNextYear = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setFullYear(prevDate.getFullYear() + 1);
      return newDate;
    });
  };
  
  // Select date handler
  const handleDateClick = (day) => {
    if (day) {
      const selectedDate = new Date(currentYear, currentMonth, day);
      const currentToday = new Date();
      
      // Set hours, minutes, seconds, and milliseconds to 0 for accurate date comparison
      currentToday.setHours(0, 0, 0, 0);
      
      // Only allow selecting current date or future dates
      if (selectedDate >= currentToday) {
        setSelectedDate(selectedDate);
      }
    }
  };
  const handleNextButtonClick = () => {
    if (!selectedDate) {
      alert("Por favor, selecciona una fecha para la reunión.");
      return;
    }
    const meetingData = {
      date: selectedDate.toISOString().split("T")[0] // "YYYY-MM-DD"
    };
    localStorage.setItem("meetingData", JSON.stringify(meetingData));
    navigate('/reunion'); 
  };

  return (
    <div className="free-trial-container">
      <div className="left-section">
        <div className="start-pedido">
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

        <div className="free-trial-offer">
          <p>Sin compromisos, ni tarifas ocultas!</p>
          <p>
            ¡La mejor forma de conocernos es probándonos! durante el free trial
            realizaremos por ti tu primer pedido, 100% gratis para ti.
          </p>
        </div>
      </div>

      <div className="right-section">
        <div className="black-calendar">
          <div className="calendar-title">
            Reunión de inicio Free Trial Design Win
          </div>
          <div className="calendar-container">
            <div className="calendar-header">
            <div>
                <button onClick={handlePrevMonth}>&lt;</button>
                <span>{currentMonthName}</span>
                <button onClick={handleNextMonth}>&gt;</button>
              </div>
              <div>
                <button onClick={handlePrevYear}>&lt;</button>
                <span>{currentYear}</span>
                <button onClick={handleNextYear}>&gt;</button>
              </div>
            </div>

            <table className="calendar">
              <thead>
                <tr>
                  <th>S</th>
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                  <th>F</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
              {calendarDays.map((week, weekIndex) => (
                  <tr key={`week-${weekIndex}`}>
                    {week.map((day, dayIndex) => (
                      <td 
                        key={`day-${weekIndex}-${dayIndex}`}
                        className={`
                          ${day.isCurrentMonth ? 'current-month' : 'other-month'}
                          ${day.isToday ? 'today' : ''}
                          ${day.isSelected ? 'selected' : ''}
                          ${day.isPastDate ? 'past-date' : ''}
                          ${day.isCurrentMonth && !day.isPastDate ? 'selectable' : ''}
                        `}
                        onClick={() => day.isCurrentMonth && !day.isPastDate && handleDateClick(day.day)}
                      >
                        {day.day}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="next-button" onClick={handleNextButtonClick}disabled={!selectedDate}>Siguiente</button>
        </div>
        

      </div>
      <div className="calendar-image">
          <img src="/disegner_13.png" alt="foto" />
        </div>
    </div>
  );
}

export default FreeTrialView;
