import React from 'react';
type Props={
    children:React.ReactNode,
    moreStyles?:string
}
const BoxText = ({ children, moreStyles }:Props) => {
  return (
    <div className={`flex  flex-col items-center pb-10 ${moreStyles}`} >
        {children}
    </div>
  );
};

export default BoxText;
