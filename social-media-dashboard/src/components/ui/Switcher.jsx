import { useState } from 'react'

export const Switcher = ({ lightTheme, setLightTheme }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    setLightTheme(!lightTheme)
  }

  const switchBgClass = isChecked ? "bg-toggleLight" : "bg-toggleDark"
  const dotBgClass = isChecked ? "bg-white" : "bg-darkDesaturatedBlue"
  const dotPosition = isChecked ? "translate-x-full" : "translate-x-0"

  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
          id='checkbox'
        />
        <div className={`block h-6 w-12 rounded-full transition-colors duration-500 ${switchBgClass}`}></div>
        <div
          className={`dot absolute top-[2px] left-1 h-5 w-5 rounded-full transition-all duration-500 ease-in-out transform ${dotPosition} ${dotBgClass}`}
        ></div>
      </div>
    </label>
  )
}
