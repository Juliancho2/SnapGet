import React from 'react';
import Download from '../molecules/Download';
import BoxText from '../molecules/BoxText';
import List from '../atomic/List';
import { contentHowDoUse } from '@/static';

const Hero = () => {
  return (
    <div className='max-w-6xl mx-auto px-2 mt-10 md:mt-32 gap-10 grid md:grid-cols-2 min-h-[40vh] '>

      <Download />
      <div className='flex justify-end'>
        <BoxText moreStyles='max-w-md  p-1 ' >
          <h2 className='text-2xl font-bold mb-5'>How do to use?</h2>
          <List content={contentHowDoUse} />
        </BoxText>
      </div>
    </div>
  );
};

export default Hero;
