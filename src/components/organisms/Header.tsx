import React from 'react';
import Logo from '../atomic/Logo';
import NavBar from '../molecules/NavBar';

const Header = () => {
  return (
    <header className='py-5 px-2 w-full sticky top-0 z-40 '>
      <div className='flex justify-between container max-w-6xl mx-auto bg-white w-full rounded-md shadow-sm px-4'>
        <section className='flex  items-center'>
          <Logo width={40} height={40} />
          <h1 className='text-sm font-bold text-black'>SnapGet</h1>
        </section>
        <NavBar/>

      </div>
    </header>
  );
};

export default Header;
