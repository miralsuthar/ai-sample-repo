import { useEffect, useState } from 'react';
import clockBg from '../assets/clockBg.png'
import { Clock } from './AnalogClock'
import { motion } from 'framer-motion'

export const DraggableClock = ({ shades200 }: { shades200: string }) => {
  const snapTarget = {
    x: 0, y: 350
  }
  const originPosition = {
    x: 0, y: 0
  }
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isAtBottom, setIsBottom] = useState(false);

  const snapThreshold = 1400;

  useEffect(() => {
    console.log(position);
  }, [position]);

  const handleDragEnd = (_event: any, info: any) => {
    const distanceToTarget = Math.sqrt(
      Math.pow(info.point.x - snapTarget.x, 2) +
      Math.pow(info.point.y - snapTarget.y, 2)
    );

    console.log("target: ", distanceToTarget);

    // Calculate the distance from the drag end position to the origin
    const distanceToOrigin = Math.sqrt(
      Math.pow(info.point.x - originPosition.x, 2) +
      Math.pow(info.point.y - originPosition.y, 2)
    );

    console.log("origin: ", distanceToOrigin);

    // Snap to the target position if within threshold
    if (distanceToTarget < snapThreshold && !isAtBottom) {
      setPosition(snapTarget);
      setIsBottom(true)
    }
    // Snap back to the origin position if not closer to the target
    else {
      setPosition(originPosition);
      setIsBottom(false)
    }
  }
  return (
    <div className="h-full px-16 pt-16 flex items-center gap-2 justify-start flex-col w-full relative bg-gradient-to-b from-[#652BFC] to-[#6466F2]">
      <img src={clockBg} className='w-full absolute top-0 left-0 h-full bg-cover' />
      <div style={{
        background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${shades200} 100%)`
      }} className='absolute top-0 left-0 h-full w-full bg-gradient-to-t opacity-60'></div>
      <motion.div animate={position} onDragOver={(e) => e.preventDefault()} onDragEnd={handleDragEnd} drag style={{
        x: position.x,
        y: position.y,
        zIndex: '10'
      }} dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }} className='cursor-pointer' dragElastic={0.7}>
        <Clock />
      </motion.div>
      <span className='text-[2rem] text-white z-10'>9:00</span>
      <div className='w-[8.75rem] h-[8.75rem] absolute left-2/4 bottom-[3.875rem] rounded-full border-dashed border border-white/30 -translate-x-2/4 '>
      </div>
    </div >
  )
}
