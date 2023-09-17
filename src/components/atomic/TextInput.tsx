import React from 'react';

const TextInput = () => {
  return (
    <div className='bg-white  min-h-[40px] w-4/5 flex p-2 rounded-md shadow-sm'>
        <input type="text " className='bg-transparent h-full w-full outline-none' placeholder='Paste your link'/>
        <button className='btn btn-neutral'>Download</button>
    </div>
  );
};

export default TextInput;
