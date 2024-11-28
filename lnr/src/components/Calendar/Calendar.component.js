import React from 'react';
import './Calendar.styles.scss';
import { useTranslation } from 'react-i18next';

function Calendar() {
  const { t } = useTranslation();
  // Days of the week in English
  const daysOfWeek = [t('Mon.'), t('Tue.'), t('Wed.'), t('Thur.'), t('Fri.'), t('Sat.'), t('Sun.')];
  const daysInMonth = 31; // January has 31 days
  const markedDate = 25;  // Mark the 25th

  // Create a placeholder for the empty days at the beginning (since Jan 1, 2025 is on a Wednesday)
  const startDayOffset = 2; // 0 = Monday, 1 = Tuesday, 2 = Wednesday
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <div className="calendar scroll-animation">
      <p className="calendar-title">{ t('January') }</p>
      <div className="calendar-grid">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar-day-header">
            {day}
          </div>
        ))}
        {/* Empty cells for days before January 1st */}
        {Array.from({ length: startDayOffset }).map((_, index) => (
          <div key={`empty-${index}`} className="calendar-day-empty"></div>
        ))}
        {/* Calendar days */}
        {days.map((day) => (
          <div
            key={day}
            className={`calendar-day ${day === markedDate ? 'calendar-day--marked' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
