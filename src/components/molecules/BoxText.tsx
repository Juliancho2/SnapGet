import React from 'react';
type Props={
    children:React.ReactNode
}
const BoxText = ({children}:Props) => {
  return (
    <div className='flex max-w-lg  flex-col items-center pb-10  w-full'>
        {children}
    </div>
  );
};

export default BoxText;
