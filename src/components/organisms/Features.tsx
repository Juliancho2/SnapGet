import React from 'react';
import tiktok from 'src/assets/svg/tiktok.svg';
import yt from 'src/assets/svg/youtube.svg';
import facebook from 'src/assets/svg/facebook.svg';
import instagram from 'src/assets/svg/instagram.svg';
import Image from 'next/image';
import BoxText from '../molecules/BoxText';
import Text from '../atomic/Text';
import { features } from '@/static';

const platormAllowed = [
  {
    label: 'Tiktok',
    icon: tiktok
  },
  {
    label: 'Youtube',
    icon: yt
  },
  {
    label: 'Instagram',
    icon: instagram
  },
  {
    label: 'Facebook',
    icon: facebook
  }
];

const Features = () => {
  return (
        <div className='max-w-6xl mx-auto my-5 md:my-20 space-y-28 min-h-[50vh] px-2'>
                <BoxText >
                    <h2 className='text-2xl font-semibold mb-5 text-center md:text-start'>Are you a social media enthusiast?</h2>
                    <Text styles='text-base text-black text-center' >

                    Have you ever come across amazing videos that you want to save or share without watermarks? SnapGet is the solution to download videos from TikTok, Facebook, Instagram and YouTube quickly and easily, removing watermarks.
                    </Text>
                </BoxText>
            <section>
                <div className="join join-vertical w-full bg-white">
                    {features.map((item, index) => (
                        <div key={index} className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                {item.title}
                            </div>
                            <div className="collapse-content">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='flex flex-col items-center'>
                <h2 className='text-2xl font-semibold mb-10 text-center'>Supported platforms</h2>
                <div className="stats shadow stats-vertical md:stats-horizontal">
                    {
                        platormAllowed.map(item => (

                            <div key={item.label} className="stat flex flex-col gap-3">
                                <div className="stat-figure text-primary">
                                    <Image width={50} height={50} src={item.icon} alt={item.label} ></Image>
                                </div>
                                <div className="stat-value text-black text-lg">{item.label}</div>
                            </div>
                        ))
                    }

                </div>
            </section>
        </div>
  );
};

export default Features;
