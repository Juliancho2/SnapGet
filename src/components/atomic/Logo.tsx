import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from 'src/assets/svg/logo.svg';

type Props={
    width:number,
    height:number
}

const Logo = ({width,height}:Props) => {
  return (
    <Link href={'#'} >
        <Image width={width} height={height} src={img} alt='logo'/>
    </Link>
  );
};

export default Logo;
