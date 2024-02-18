import { cn } from "../../utils"
import { useState, useRef } from 'react';

export const Modal = ({ className, shades300, shades400, shades500, shades600, shades700 }: { className: string, shades300: string, shades400: string, shades500: string, shades600: string, shades700: string }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const tabRef1 = useRef<HTMLDivElement | null>(null);
  const tabRef2 = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className={cn("bg-[#141417] w-[47.875rem] p-6 border border-black/50 animate-bounceModal shadow-[0_20.0001px_7.429px_0_rgba(0,0,0,0.03)_0_29.9px_15.16px_0px_rgba(0,0,0,0.05)_0_37.265px_25.32px_0px_rgba(0,0,0,0.06)_0_100px_80px_0px_rgba(0,0,0,0.13)] rounded-xl", className)}>
      <span className="flex gap-2">
        <div className="w-5 h-5 bg-cover">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6364 0L18.2618 3L15.2727 4.36364L18.2618 5.73818L19.6364 8.72727L21 5.73818L24 4.36364L21 3M8.72727 3.27273L6 9.27273L0 12L6 14.7273L8.72727 20.7273L11.4545 14.7273L17.4545 12L11.4545 9.27273M19.6364 15.2727L18.2618 18.2618L15.2727 19.6364L18.2618 21L19.6364 24L21 21L24 19.6364L21 18.2618" fill={shades300} />
          </svg>
        </div>
        <p className="text-white">Ask AI</p></span>
      <textarea cols={20} rows={5} className="w-full mt-6 bg-[#201F23] rounded-lg p-5 text-white" value={"Make this page in react js"} />
      <div className="flex justify-between items-center mt-[1.1875rem]">
        <div className="p-1.5 bg-[#201F23] w-max rounded-xl">
          <div className="relative flex w-max text-center rounded-xl text-white cursor-pointer bg-[#201F23]">
            <div ref={tabRef1} onClick={() => setSelectedTab(1)} className="px-[2.125rem] py-[0.625rem] z-10">React</div>
            <div ref={tabRef2} onClick={() => setSelectedTab(2)} className="px-[2.125rem] py-[0.625rem] z-10">Vue</div>
            <div style={{
              width: selectedTab === 1 ? `${tabRef1?.current?.getBoundingClientRect().width}px` : `${tabRef2?.current?.getBoundingClientRect().width}px`,
              left: selectedTab === 2 ? `${tabRef1.current?.getBoundingClientRect().width}px` : "0px"
            }} className={cn("h-full absolute top-0 rounded-lg transition-all duration-300 ease-in-out left-0 bg-[#141417]")}></div>
          </div>
        </div>
        <button onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} style={{
          background: isHovering ? `linear-gradient(180deg, ${shades600} 0%, ${shades700} 100%)` : `linear-gradient(180deg,${shades400} 0%, ${shades500} 100%)`
        }} className="font-bold text-white px-8 py-[0.875rem] border-t border-white/[28%] rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,1#764FFF)_0_2px_4px_0_rgba(0,0,0,0.25)]  hover:border-black/[28%] transition-all duration-300 ease-in-out">Generate</button>
      </div>
    </div >
  )
}
