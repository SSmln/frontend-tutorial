import React from 'react';
import {DefaultPlayer as Video} from 'react-html5video';
import introVideo from './videos/re-wind.mp4';



const ReactVideoPlayer = () => {
  return (
    <Video autoPlay loop muted p>
      <source src={introVideo} type = "video/webm" />
    </Video>  
  );
};

export default ReactVideoPlayer;