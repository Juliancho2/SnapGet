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
      context.handleDataVideo(undefined);
      const apiURl = !regex.test(context?.urlInput) ? '/api/all-media' : '/api/tiktok';

      if (!regx.test(context?.urlInput)) {
        return context?.handleError('Invalid Url');
      }
      try {
        context.handleLoadingVideo();
        const response = await axios.post(apiURl, { url: context.urlInput });
        context?.handleDataVideo(response.data);
      } catch (err: any) {
        context?.handleError(err.response.data);
      }
    }
    context?.handleLoadingVideo();
  };

  return (
    < >
      {
        (context?.error.isError) && (
          <div className="toast toast-end z-10">
            <div className="alert alert-error">
              <span>{context?.error.name}</span>
            </div>
          </div>
        )
      }
      {
        context && <div className='flex flex-col gap-8 items-center md:mt-24 justify-center z-10'>
          <div>
            <Text styles='text-4xl sm:text-5xl font-bold text-center  '>Download Videos from <br /> <span className='bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent'>Social Media Favorites</span> </Text>
            <p className='mt-4 text-gray-600 font-medium text-center text-lg'>All-in-One Video Download Solution!</p>
          </div>
          <form className='w-full md:w-[600px] h-auto' onSubmit={(e) => handleSubmit(e)}>
            <TextInput loading={context?.loading} setUrl={context?.handleUrlInput} url={context?.urlInput} />
          </form>
        </div>
      }

    </>
  );
};

export default Download;
