export const transformData = (originalData:any) => {
  const {
    links,
    picture,
    description
  } = originalData;

  const transformedData = {
    video: [(links && links[1]?.link) || (links && links[0]?.link) || ''],
    music: [''],
    cover: [picture || ''],
    OriginalWatermarkedVideo: [''],
    description: [description || ''],
    dynamic_cover: [picture || ''],
    author: [''],
    region: [''],
    avatar_thumb: [''],
    custom_verify: [''],
    videoid: [''],
    post_type: 'video_post'
  };

  return transformedData;
};
