import { useState } from "react"
import dropDownIcon from '../assets/DropdownIcon.svg'
import { cn } from "../../utils"

const filters = [
  { "id": 1, "value": "All" },
  { "id": 2, "value": "UX/UI Design" },
  { "id": 3, "value": "Frontend" },
  { "id": 4, "value": "Backend" },
  { "id": 5, "value": "Full Stack" },
  { "id": 6, "value": "Graphic Designer" }
]

const FilteredListItem = ({ value, checkBoxColor }: { value: string, checkBoxColor: string }) => {
  const [isHoverd, setIsHoverd] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex py-[0.375rem] px-[0.625rem] hover:bg-white/5 rounded-md" onMouseEnter={() => setIsHoverd(true)} onMouseLeave={() => setIsHoverd(false)}>
      <label className="relative flex justify-center items-center rounded-full cursor-pointer">
        <input type="checkbox" style={{
          background: isChecked ? `${checkBoxColor}` : "transparent"
        }} checked={isChecked} onChange={(e) => { setIsChecked(e.target.checked); }} className={cn("before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all checked:border-gray-900 checked:bg-blue-900")} />
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
      <span className={cn("ml-2 transition-all duration-300 text-white text-sm opacity-60", isHoverd && "ml-3")}>{value}</span>
    </div>
  )
}

export const DropDownSelector = ({ checkBoxColor }: { checkBoxColor: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative h-max">
      <div

        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className={cn("bg-[#17171A] cursor-pointer px-3 py-2 flex justify-between items-center gap-[0.3125rem] text-[13px] text-white w-max hover:bg-[#101012] rounded-full", isOpen && "bg-[#101012]")}>
        Model
        <img src={dropDownIcon} className="w-[0.625rem] h-[0.625rem]" />
      </div>
      {isOpen && <div className={cn("py-2 px-[0.375rem] bg-[#17171A] absolute left-0 top-[calc(100%+5px)] w-60 rounded-md opacity-0 transition-all duration-300", isOpen && "opacity-100")}>
        {filters.map((filter) => (
          <FilteredListItem value={filter.value} key={filter.id} checkBoxColor={checkBoxColor} />
        ))}
      </div>}
    </div>
  )
}
