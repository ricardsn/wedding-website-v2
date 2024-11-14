// Countdown.js
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CountDown.styles.scss';

function CountDown({ targetDate }) {
    const { t } = useTranslation();


    // Initialize state to store days, hours, minutes, and seconds
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Function to calculate time remaining
        const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
            });
        } else {
            // If countdown is over, set all values to zero
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
        };

        // Initial call to set the countdown immediately
        calculateTimeLeft();

        // Update countdown every second
        const timer = setInterval(calculateTimeLeft, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className='CountDown-Content' style={{ textAlign: 'center' }}>
            <p className='CountDown-Title'>{ t('Countdown') }</p>
            <p  className='CountDown-Time'>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
        </div>
    );
}

export default CountDown;
