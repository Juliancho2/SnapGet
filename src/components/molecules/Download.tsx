'use client';
import React, { useContext } from 'react';
import axios from 'axios';
import Text from '../atomic/Text';
import TextInput from '../atomic/TextInput';
import { DataInfoContext } from '@/context/infoVideoContext';
import { DataVideoContextType } from '@/interface/dataVideo';

const Download = () => {
  const context = useContext<DataVideoContextType | undefined>(DataInfoContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const regx = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/ig;
    const regex = /tiktok/g;
    e.preventDefault();

    if (context) {
      const apiURl = !regex.test(context?.urlInput) ? '/api/all-media' : '/api/tiktok';

      if (!regx.test(context?.urlInput)) {
        return context?.handleError('Invalid Url');
      }
      try {
        context?.handleLoadingVideo();
        const response = await axios.post(apiURl, { url: context.urlInput });
        context?.handleDataVideo(response.data);
      } catch (err) {
        context?.handleError('An error occurred try again later');
      }
    }
    context?.handleLoadingVideo();
  };

  return (
    <section >
      {
        context?.error.isError && (
          <div className="toast toast-end">
            <div className="alert alert-error">
              <span>{context.error.name}</span>
            </div>
          </div>
        )
      }
      {
        context && <div className='flex flex-col items-start gap-10 justify-center mt-10'>
          <Text styles='text-4xl font-semibold text-center md:text-start  '>Your source of videos  from your favorite social networks</Text>
          <form className='w-full md:w-4/5 h-auto' onSubmit={(e) => handleSubmit(e)}>
            <TextInput loading={context?.loading} setUrl={context?.handleUrlInput} url={context?.urlInput} />
          </form>
        </div>
      }

    </section>
  );
};

export default Download;
