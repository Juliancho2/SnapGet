import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black rounded-md p-1 min-h-[15vh] z-10'>

      <div className='max-w-6xl mx-auto text-xs flex flex-col items-center text-gray-300 py-5 space-y-2 '>
        <p>Made by Julian Moreno.</p>
        <p>We are not affiliated with any of the supported platforms.</p>
        <p>Copyright 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
