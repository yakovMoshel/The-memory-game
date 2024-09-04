import React, { useEffect, useRef, useState } from 'react'

export default function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const timer = useRef();

    useEffect(() => {
        if (isRunning) {
            timer.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(timer.current); // Clear interval on unmount or when isRunning changes
    }, [isRunning]);

    const format = (time) => {
        let hours = Math.floor(time / 60 / 60 % 24);
        let minutes = Math.floor(time / 60 % 60);
        let seconds = Math.floor(time % 60);

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return `${hours}:${minutes}:${seconds}`;
    }


    return (
        <div>
            Timer
            <p>{format(time)}</p>
            <button onClick={() => setIsRunning(prev => !prev)}>
    {isRunning ? 'Pause' : 'Start'}
</button>


        </div>
    )
}
