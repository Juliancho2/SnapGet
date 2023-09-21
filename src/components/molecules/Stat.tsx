'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import description from 'src/assets/svg/hashtag.svg';
import author from 'src/assets/svg/author.svg';
import download from 'src/assets/svg/download.svg';
import Link from 'next/link';
import { VideoInfo } from '@/interface/dataVideo';
import useMediaDownload from '@/hooks/useMediaDownload';

type Props = {
  data: VideoInfo
}

const Stat = ({ data }: Props) => {
  const { urlVideo, handleDownloadClick } = useMediaDownload(data);

  useEffect(() => {
    handleDownloadClick();
  }, [data]);

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow">
      <div className='bg-white rounded-md min-h-32 flex items-center justify-center stat'>
        <Image className='stat max-w-[150px]' width={80} height={80} alt={'image'} src={data?.cover[0]} />
      </div>

      <div className="stat flex flex-col max-w-sm overflow-hidden items-center gap-6">
        <div className="stat-title"><Image alt='like' width={40} height={40} src={description || 'Unknow'} /></div>
        <p className="stat-value whitespace-normal text-base">{data?.description[0]}</p>
      </div>

      <div className="stat flex flex-col items-center gap-6">
        <div className="stat-title"><Image alt='share' width={40} height={40} src={author} /></div>
        <div className="stat-value text-base whitespace-normal">{data?.author[0] || 'Unknow'}</div>
      </div>

      <div className="stat flex flex-col items-center gap-6">
        <div className="stat-title"><Image alt='share' width={40} height={40} src={download} /></div>
        <div className="stat-value flex flex-col gap-4">
          <Link href={urlVideo} target='_blank' download={'video.mp4'} rel="noopener noreferrer" className='btn btn-neutral shadow-sm'>Download</Link>
        </div>
      </div>

    </div>
  );
};

export default Stat;
