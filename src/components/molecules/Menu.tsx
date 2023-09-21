import React, { useState } from 'react';
import menu from 'src/assets/svg/menu.svg';
import Image from 'next/image';
import Link from 'next/link';

type Props={
    routes:Array<{path:string, label:string, icon:string}>
}

const Menu = ({ routes }:Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
        <div className='md:hidden relative'>
            <Image onClick={() => setOpenMenu((prev) => !prev)} width={30} height={30} alt={'menu'} src={menu} />
            {
                openMenu &&
                <ul className=' menu menu-vertical absolute right-0 bg-white mt-5 rounded-md justify-center shadow-sm flex-row  items-center text-slate-600 '>

                    {
                       routes.map((route) => (
                           <li key={route.path}>
                               <Link href={route.path} target='_blank' className='text-xs font-semibold '>
                                   <Image width={20} height={20} alt={route.label} src={route.icon} />
                               </Link>
                           </li>
                       ))
                   }
                </ul>

            }
        </div>
  );
};

export default Menu;
