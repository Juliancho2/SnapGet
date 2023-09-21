import { useContext, useState } from 'react';
import { VideoInfo } from '@/interface/dataVideo';
import { DataInfoContext } from '@/context/infoVideoContext';

const useMediaDownload = (data: VideoInfo) => {
  const context = useContext(DataInfoContext);
  const [urlVideo, setUrlVideo] = useState('');

  const handleDownloadClick = () => {
    const regex = /tiktok/g;

    if (context && !regex.test(context.urlInput)) {
      setUrlVideo(data.video[0]);
    } else {
      const videoPromise = fetch(data.video[0])
        .then((response) => response.blob())
        .then((blob) => window.URL.createObjectURL(blob));

      Promise.all([videoPromise])
        .then(([videoUrl]) => {
          setUrlVideo(videoUrl);
        });
    }
    context?.handleUrlInput('');
  };
  return { urlVideo, handleDownloadClick };
};

export default useMediaDownload;
