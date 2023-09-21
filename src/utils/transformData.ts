export const transformData = (originalData:any) => {
  const transformedData = {
    video: [originalData.links[1].link],
    music: [''],
    cover: [originalData.picture],
    OriginalWatermarkedVideo: [originalData.links[0].link],
    description: [originalData.description],
    dynamic_cover: [originalData.picture],
    author: [''],
    region: [''],
    avatar_thumb: [''],
    custom_verify: [''],
    videoid: [''],
    post_type: 'video_post'
  };

  return transformedData;
};
