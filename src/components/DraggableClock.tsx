import clockBg from '../assets/clockBg.png'
import { Clock } from './AnalogClock'

export const DraggableClock = ({ shades100, shades200 }: { shades100: string, shades200: string }) => {
  return (
    <div className="h-full px-16 pt-16 flex justify-center w-full relative bg-gradient-to-b from-[#652BFC] to-[#6466F2]">
      <img src={clockBg} className='w-full absolute top-0 left-0 h-full bg-cover' />
      <div style={{
        background: `linear-gradient(180deg, ${shades100} 0%, ${shades200} 100%)`
      }} className='absolute top-0 left-0 h-full w-full bg-gradient-to-t opacity-60'></div>
      <Clock />
      <div className='w-[8.75rem] h-[8.75rem] absolute left-2/4 bottom-[3.875rem] rounded-full border-dashed border border-white/30 -translate-x-2/4 '>
      </div>
    </div>
  )
}
