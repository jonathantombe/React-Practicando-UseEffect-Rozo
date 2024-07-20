import React, { useState, useEffect } from "react";

const DigitalClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <h1>Digital Clock</h1>
            <h2>{time}</h2>
        </div>
    );
};

export default DigitalClock;