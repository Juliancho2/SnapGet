import React, { useContext } from 'react';
import Stat from '../molecules/Stat';
import { DataInfoContext } from '@/context/infoVideoContext';
import { DataVideoContextType } from '@/interface/dataVideo';


const Result = () => {
    const context = useContext<DataVideoContextType | undefined>(DataInfoContext);
    return (
        <div className='max-w-6xl mx-auto my-10 px-2'>
            <div className='flex flex-col gap-4'>
                {context?.dataVideo && <Stat data={context.dataVideo} />}
            </div>
        </div>
    );
};

export default Result;
