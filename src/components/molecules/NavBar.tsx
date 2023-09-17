import React from 'react';

const NavBar = () => {
    return (
        <nav className='navbar w-full'>
            <div className='navbar-end w-full'>
                <ul className='flex menu flex-row   text-slate-600 '>
                    <li ><a className='text-xs font-semibold '>Changelog</a></li>
                    <li><a className='text-xs font-semibold '>Follow me</a></li>
                    <li><a className='text-xs font-semibold '>Buy me cofee</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
