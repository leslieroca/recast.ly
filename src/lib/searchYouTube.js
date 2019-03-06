var searchYouTube = (options, callback) => {
  let data = {
    q: options.query,
    maxResults: options.max,
    key: options.key,
    type: 'video',
    part: 'snippet',
    videoEmbeddable: true
  };
  $.get('https://www.googleapis.com/youtube/v3/search', data, (videos) => callback(videos.items));
};

export default searchYouTube;
