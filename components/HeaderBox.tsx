import React from 'react'

const HeaderBox = ({type = 'title', title, subtext, user}: HeaderBoxProps) => {
  return (
    <div className='flex flex-col gap-1'>
        <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
            {title}
            {type === 'greeting' && (
                <span className='text-[#0179FE]'>
                    &nbsp;{user}
                    </span>
            )}
        </h1>
        <p className="text-base lg:text-base font-normal text-gray-600">{subtext}</p>
    </div>
  )
}

export default HeaderBox