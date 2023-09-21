export interface VideoInfo {
    video: string[];
    music: string[];
    cover: string[];
    OriginalWatermarkedVideo: string[];
    description: string[];
    dynamic_cover: string[];
    author: string[];
    region: string[];
    avatar_thumb: string[];
    custom_verify: string[];
    videoid: string[];
    post_type: string;
}

export interface ErrorVideo{
    name: string,
    isError: boolean

}

export interface DataVideoContextType {
    dataVideo:VideoInfo | undefined,
    handleDataVideo:(value:any)=>void,
    handleLoadingVideo:()=>void,
    handleError:(value:string)=>void,
    loading:boolean,
    error:ErrorVideo,
    urlInput:string,
    handleUrlInput:(value:string)=>void
  }
