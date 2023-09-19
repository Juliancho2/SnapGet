import React, { createContext, ReactNode, useState } from 'react';
import { DataVideoContextType } from '@/interface/dataVideo';


const initialError={name:'',isError:false};

// Crear el contexto
export const DataInfoContext = createContext<DataVideoContextType | undefined>(undefined);

export const DataInfoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dataVideo, setDataVideo] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(initialError);


    const handleDataVideo=(value:any)=>{
        setDataVideo(value);
    };

    const handleLoadingVideo=()=>{
        setLoading((prev)=>!prev);
    };

    const handleError=(err:string)=>{
      setError({name:err,isError:true});

      setTimeout(()=>{setError(initialError);},2000);
    };


  return (
    <DataInfoContext.Provider value={{ dataVideo,handleDataVideo,loading,handleLoadingVideo,handleError,error }}>
      {children}
    </DataInfoContext.Provider>
  );
};
