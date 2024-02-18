import { useState, useEffect } from 'react';
import { Ring } from './Ring';
import { Scanner } from './Scanner';
import { cn } from '../../utils';


export const Loader = () => {
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
    <div className='relative w-40 h-full'>
      <Ring className={cn('absolute top-2/4 opacity-0 duration-500 left-2/4 -translate-y-2/4 scale-[0.2] -translate-x-2/4', isRing === 1 && "opacity-100")} />
      <Ring className={cn('absolute top-2/4 opacity-0 left-2/4 duration-500 -translate-y-2/4 scale-[0.4] -translate-x-2/4', isRing === 2 && "opacity-100")} />
      <Ring className={cn('absolute opacity-0 top-2/4 left-2/4 duration-500 -translate-y-2/4 scale-[0.6] -translate-x-2/4', isRing === 3 && "opacity-100")} />
      <Ring className={cn('absolute top-2/4 left-2/4 opacity-0 duration-500 -translate-y-2/4 scale-[0.8] -translate-x-2/4', isRing === 4 && "opacity-100")} />
      <Scanner className='w-40 h-40 scale-150 animate-spin absolute top-0 left-0' />
    </div>
  )
}
