'use client';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import Text from '../atomic/Text';
import TextInput from '../atomic/TextInput';
import List from '../atomic/List';
import BoxText from './BoxText';
import { contentHowDoUse } from '@/static';
import { DataInfoContext } from '@/context/infoVideoContext';
import { DataVideoContextType } from '@/interface/dataVideo';


const Download = () => {
  const [url, setUrl] = useState('');
  const context = useContext<DataVideoContextType | undefined>(DataInfoContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const regx = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/ig;
    e.preventDefault();

    if (!regx.test(url)) {
     return context?.handleError('Invalid Url');
    }
    try {
      context?.handleLoadingVideo();
      const response = await axios.post('/api/downloader', { url });
      context?.handleDataVideo(response.data);
    }
    catch (err) {
      context?.handleError('An error occurred try again later');
    }
    setUrl('');
    context?.handleLoadingVideo();
  };


  return (
    <section className='grid md:grid-cols-2 min-h-[70vh]'>
      {
        context?.error.isError && (
          <div className="toast toast-end">
            <div className="alert alert-error">
              <span>{context.error.name}</span>
            </div>
          </div>
        )
      }
      <div className='flex flex-col items-start gap-10 justify-center mb-10'>
        <Text styles='text-4xl font-semibold text-center md:text-start '>Your Source for TikTok Videos <br /> without Watermark</Text>
        <form className='w-full md:w-4/5' onSubmit={(e) => handleSubmit(e)}>
          <TextInput loading={context?.loading} setUrl={setUrl} url={url} />
        </form>
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
          <List content={contentHowDoUse} />
        </BoxText>
      </div>
    </section>
  );
};

export default Download;
