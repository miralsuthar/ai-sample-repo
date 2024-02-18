import dropdownIcon from '../assets/DropdownIcon.svg';

export const AnimatedDropdown = () => {

  return (
    <button className="bg-[#201F23] ml-auto focus:bg-[#17171A] w-max h-max justify-between items-center flex text-white/60 py-5 px-6 gap-[12.81rem] rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_8px_0_rgba(0,0,0,0.08)] focus:shadow-[0_0_0_2px_rgba(155,117,255,0.41)] transition-all duration-300 border-t border-white/[9%] hover:text-white">
      <span>Select item</span>
      <img className='w-5 h-5' src={dropdownIcon} />
    </button>
  )
}
