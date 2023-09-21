import React from 'react';
import Image from 'next/image';
import coffee from 'src/assets/svg/coffee.svg';
import twitter from 'src/assets/svg/x.svg';
import Link from 'next/link';
import Menu from './Menu';

const routes = [
  { path: 'https://twitter.com/julianchoms', label: 'Follow me', icon: twitter },
  { path: 'https://www.buymeacoffee.com/juliancho', label: 'Buy me a coffee', icon: coffee }
];

const NavBar = () => {
  return (
        <nav className='navbar w-full'>
            <div className='navbar-end w-full'>
                <ul className=' menu flex-row hidden md:flex items-center   text-slate-600 '>
                    {
                        routes.map((route) => (
                            <li key={route.path}>
                                <Link href={route.path} target='_blank' className='text-xs font-semibold '>
                                    <Image width={22} height={22} alt={route.label} src={route.icon} />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <Menu routes={routes} />
            </div>
        </nav>
  );
};

export default NavBar;
