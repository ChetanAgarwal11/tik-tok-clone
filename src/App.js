import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './comps/Video';
import db from './firebase/config';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const unsub = db.collection('videos')
      .onSnapshot(snap => {
        setVideos(snap.docs.map(doc => doc.data()))
      })

    return () => unsub();
  }, [])

  return (
    <div className="App">
      <div className="app_videos">
        {videos.map(
          ({ 
            url, 
            channel, 
            description, 
            song, 
            likes, 
            messages, 
            shares 
          }, index) => (
          <Video 
            key={index}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
