import React from 'react';
import Text from '../atomic/Text';
import TextInput from '../atomic/TextInput';
import List from '../atomic/List';
import BoxText from './BoxText';
import { contentHowDoUse } from '@/static';



const Download = () => {
    return (
        <section className='grid md:grid-cols-2 min-h-[70vh]'>
            <div className='flex flex-col items-start gap-10 justify-center'>
                <Text styles='text-4xl font-semibold '>Your Source for TikTok Videos <br /> without Watermark</Text>
                <TextInput />
            </div>
            <div className='flex flex-col items-end justify-center'>
                <BoxText>
                    <h2 className='text-2xl font-semibold mb-10'>Are you a TikTok lover?</h2>
                    <Text styles='text-sm text-black' >

                        have you ever found
                        an amazing video you want to save, share or
                        enjoy without the TikTok watermark, you re in
                        the right place! TokGo is your ultimate solution
                        to download TikTok videos quickly and easily,
                        removing the watermark and giving you full
                        control over the content you love.
                    </Text>
                </BoxText>
                <BoxText>
                    <h2 className='text-2xl font-semibold mb-10'>how do to use?</h2>
                    <List content={contentHowDoUse}/>
                </BoxText>
            </div>
        </section>
    );
};

export default Download;
