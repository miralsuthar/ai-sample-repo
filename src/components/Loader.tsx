import { useState, useEffect } from 'react';
import { Ring } from './Ring';
import { cn } from '../../utils';


export const Loader = ({ shades100 }: { shades100: string }) => {
  const [isRing, setIsRing] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRing((prev) => prev > 3 ? 0 : prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])
  return (
    <div className='relative h-[8rem] w-[8rem] ml-20'>
      <div style={{
        background: `conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 75%, ${shades100} 100%)`
      }} className='w-full h-full rounded-full absolute top-0 left-0 animate-spin' />
      <Ring color={shades100} className={cn('absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 scale-[0.2] opacity-0', isRing === 1 && "opacity-100")} />
      <Ring color={shades100} className={cn('absolute top-2/4 opacity-0 -translate-x-2/4 -translate-y-2/4 left-2/4  scale-[0.4] ', isRing === 2 && "opacity-100")} />
      <Ring color={shades100} className={cn('absolute opacity-0 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 scale-[0.6] ', isRing === 3 && "opacity-100")} />
      <Ring color={shades100} className={cn('absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 scale-[0.8]', isRing === 4 && "opacity-100")} />
    </div>
  )
}
