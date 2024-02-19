import { useState, useEffect } from 'react';
import clockBg from '../assets/clockBg.png'
import { Clock } from './AnalogClock'
import { DndContext, useDroppable } from '@dnd-kit/core';

const Droppable = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { setNodeRef } = useDroppable({
    id: id
  });

  return (
    <div ref={setNodeRef} className='h-full w-full relative z-10'>
      {children}
    </div>
  )
}

export const DraggableClock = ({ shades200 }: { shades200: string }) => {
  const [parent, setParent] = useState(null);
  const [time, setTime] = useState<string>("");

  const handleDragEnd = ({ over }: { over: any }) => {
    setParent(over ? over.id : null)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-IN', {
        timeStyle: 'short',
        hour12: true
      }))
    }, 60000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString('en-IN', {
      timeStyle: 'short',
      hour12: true
    });

    setTime(currentTime.split("p")[0]);
  }, [])

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="h-full px-16 pt-16 flex items-center gap-2 justify-start flex-col w-full relative bg-gradient-to-b from-[#652BFC] to-[#6466F2]">
        <img src={clockBg} className='w-full absolute top-0 left-0 h-full bg-cover' />
        <div style={{
          background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${shades200} 100%)`
        }} className='absolute top-0 left-0 h-full w-full bg-gradient-to-t opacity-60'></div>
        {!parent ? <Clock /> : <div className='h-[8.75rem] w-[8.75rem]'></div>}
        <span className='text-[2rem] text-white z-10'>{time}</span>
        <div className='w-[8.75rem] h-[8.75rem] absolute left-2/4 bottom-[3.875rem] rounded-full border-dashed border border-white/30 -translate-x-2/4'>
          <Droppable id="droppable">
            {parent === "droppable" ? <Clock /> : <div className='h-full w-full'></div>}
          </Droppable>
        </div>
      </div>
    </DndContext>
  )
}
