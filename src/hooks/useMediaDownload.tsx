import React, { useState } from 'react';
import { VideoInfo } from '@/interface/dataVideo';


const useMediaDownload = ( data :VideoInfo ) => {
    const [urlVideo, setUrlVideo] = useState('');
    const [urlAudio, setUrlAudio] = useState('');

    const handleDownloadClick = () => {
        const videoPromise = fetch(data.video[0])
            .then((response) => response.blob())
            .then((blob) => window.URL.createObjectURL(blob));

        const audioPromise = fetch(data.music[0])
            .then((response) => response.blob())
            .then((blob) => window.URL.createObjectURL(blob));

        Promise.all([videoPromise, audioPromise])
            .then(([videoUrl, audioUrl]) => {
                setUrlVideo(videoUrl);
                setUrlAudio(audioUrl);
            });
    };
    return { urlVideo, urlAudio, handleDownloadClick };
};

export default useMediaDownload;
