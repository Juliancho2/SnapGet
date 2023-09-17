import Image from 'next/image';
import React from 'react';
import img from 'src/assets/svg/logo.svg';

type Props={
    width:number,
    height:number
}

const Logo = ({width,height}:Props) => {
  return (
    <div>
        <Image width={width} height={height} src={img} alt='logo'/>
    </div>
  );
};

export default Logo;
