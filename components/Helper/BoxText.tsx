import React from 'react'

type Props = {
  children: React.ReactNode;
};

const BoxText = ({children}: Props) => {
  return (
    <div>
        <h1 className='border-2 px-4 w-fit bg-gray-100 rounded-lg text-red-700 font-bold'>
            {children}
        </h1>
    </div>
  )
}

export default BoxText