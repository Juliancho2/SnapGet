import Image from 'next/image';
import React from 'react';
import paste from 'src/assets/svg/paste.svg';
import close from 'src/assets/svg/close.svg';

type Props = {
  setUrl: (value: string) => void
  url: string,
  loading: boolean | undefined
}

const TextInput = ({ setUrl, url, loading }: Props) => {
  const pasteFromClipboard = async () => {
    const text = await navigator.clipboard.readText();
    setUrl(text);
  };

  return (
    <div className='bg-white h-[64px] w-full flex p-2 rounded-md shadow-sm'>
      <input value={url} required onChange={(e) => setUrl(e.target.value)} type="text " className='h-full w-full outline-none' placeholder='Paste your link' />
      {
       url.trim().length === 0
         ? <div className="tooltip flex items-center justify-center mx-2 hover:opacity-75 cursor-pointer transition-all duration-200" data-tip="paste">
          <Image onClick={pasteFromClipboard} src={paste} alt='paste' width={40} height={40} />
        </div>
         : <div className="tooltip flex items-center justify-center mx-2 hover:opacity-75 cursor-pointer transition-all duration-200" data-tip="remove">
          <Image onClick={() => setUrl('')} src={close} alt='paste' width={40} height={40} />
        </div>

      }
      <button className='btn btn-neutral'>
        {
          loading
            ? <span className="loading loading-dots loading-lg"></span>
            : 'Download'
        }
      </button>
    </div>
  );
};

export default TextInput;
