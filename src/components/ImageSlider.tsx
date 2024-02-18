import { useState } from 'react';
import sliderImage from '../assets/sliderImage.png';


export const ImageSlider = ({ color }: { color: string }) => {
  const [sliderPos, setSLiderPos] = useState(50);
  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e?.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSLiderPos(percent);
  }

  return (
    <div onMouseMove={handleMove} className="w-[31.125rem] h-full relative select-none">
      <div
        className='absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.38]' style={{
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          backgroundColor: `${color}`
        }} />
      <img src={sliderImage} className='w-full h-full bg-cover' />
      <div className='absolute top-2/4 -translate-y-2/4 rounded-full bottom-0 h-2/4 w-1 bg-white cursor-ew-resize' style={{
        left: `calc(${sliderPos}% - 1px)`
      }} />
    </div>
  )
}
