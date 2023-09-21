export const transformData = (originalData:any) => {
  const transformedData = {
    video: [originalData.links[1] ? originalData.links[1].link : originalData.links[0].link],
    music: [''],
    cover: [originalData.picture ? originalData.picture : ''],
    OriginalWatermarkedVideo: [''],
    description: [originalData.description ? originalData.description : ''],
    dynamic_cover: [originalData.picture ? originalData.picture : ''],
    author: [''],
    region: [''],
    avatar_thumb: [''],
    custom_verify: [''],
    videoid: [''],
    post_type: 'video_post'
  };

  return transformedData;
};
