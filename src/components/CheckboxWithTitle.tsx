import { cn } from "../../utils"
import { useState, useEffect } from "react";

export const CheckboxWithTitle = ({ title, primaryColor400 }: { title: string, primaryColor400: string }) => {

  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {

  }, [primaryColor400])
  return (
    <div className="flex text-white gap-[0.375rem]">
      <label className="relative flex justify-center items-center rounded-full cursor-pointer">
        <input style={{
          background: isChecked ? `${primaryColor400}` : "transparent",
          borderColor: isChecked ? `${primaryColor400}` : "white"
        }} onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} type="checkbox" className={cn("before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all checked:border-gray-900 checked:bg-blue-900", isChecked && `bg-[${primaryColor400}]`)} />
        <span
          className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
            stroke="currentColor" stroke-width="1">
            <path fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </span>
      </label>
      <div style={{
        color: isChecked ? `${primaryColor400}` : "white"
      }} className="transition-all relative w-max">
        <div style={{
          background: `${primaryColor400}`,
          width: isChecked ? "100%" : "0"
        }} className="absolute top-2/4 transition-all duration-500 left-0 h-[0.125rem]" />
        {title}
      </div>
    </div>
  )
}
