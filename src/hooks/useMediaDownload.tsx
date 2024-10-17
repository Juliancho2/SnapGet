import { useContext, useState } from 'react';
import { VideoInfo } from '@/interface/dataVideo';
import { DataInfoContext } from '@/context/infoVideoContext';

const useMediaDownload = (data: VideoInfo) => {
  const context = useContext(DataInfoContext);
  const [urlVideo, setUrlVideo] = useState('');

  const handleDownloadClick = async () => {
    try {
      const regex = /tiktok/g;

      if (context && !regex.test(context.urlInput)) {
        setUrlVideo(data.video[0]);
      } else {
        const response = await fetch(data.video[0]);

        if (!response.ok) {
          throw new Error('No se pudo descargar el video.');
        }

        const blob = await response.blob();
        const videoUrl = window.URL.createObjectURL(blob);

        setUrlVideo(videoUrl);
      }

      // Limpia el contexto
      context?.handleUrlInput('');
    } catch (error) {
      throw new Error('An unexpected error occurred. Please try again later.');
    }
  };

  return { urlVideo, handleDownloadClick };
};

export default useMediaDownload;
