// TODO: Render the `App` component to the DOM

import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
// import VideoList from './VideoList.js'
// import VideoPlayer from './VideoPlayer.js'
// import Search from './Search.js'
// import exampleVideoData from '../data/exampleVideoData.js'

ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<searchYouTube />, document.getElementById('app'));