import { useState, useEffect } from 'react';
import clockFace from '../assets/clockFace.png';
export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minsDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  return (
    <div className="clock relative w-[8.75rem] h-[8.75rem]" >
      <img src={clockFace} alt="Clock face" className="clock-face w-full h-full bg-cover" draggable={false} />
      <div className="hand hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }} />
      <div className="hand min-hand" style={{ transform: `rotate(${minsDegrees}deg)` }} />
      <div className='w-[0.416rem] h-[0.416rem] rounded-full bg-[#3F3DB6] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4' />
      <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }} />
    </div>
  );
};
