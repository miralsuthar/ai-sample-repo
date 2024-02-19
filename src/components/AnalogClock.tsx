import { useState, useEffect } from 'react';
import clockFace from '../assets/clockFace.png';
import { cn } from '../../utils';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
export const Clock = () => {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: "draggable"
  });
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

  const secondsDegrees = (seconds / 60) * 360;
  const minsDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

  const [isClicked, setIsClicked] = useState(false);
  return (
    <div ref={setNodeRef} style={{
      transform: CSS.Transform.toString(transform)
    }}>
      <div style={{
        width: isClicked ? `158px` : `150px`,
        height: isClicked ? `158px` : `150px`,
      }} {...attributes} {...listeners} onMouseDown={() => setIsClicked(prev => !prev)} className={cn("clock translate-y-0 transition-all rounded-full duration-500 relative w-[8.75rem] h-[8.75rem]", isClicked && "shadow-clockShadow translate-y-[2.1875rem]")} >
        <img src={clockFace} alt="Clock face" className="clock-face w-full h-full bg-cover" draggable={false} />
        <div className="hand hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }} />
        <div className="hand min-hand" style={{ transform: `rotate(${minsDegrees}deg)` }} />
        <div className='w-[0.416rem] h-[0.416rem] rounded-full bg-[#3F3DB6] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4' />
        <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }} />
      </div>
    </div>
  );
};

