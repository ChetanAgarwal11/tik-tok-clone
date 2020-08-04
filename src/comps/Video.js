import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

const Video = ({ 
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
 }) => {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);

    const handleVideoClick = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

    return(
        <div className="video">
            <video 
                className="video_player" 
                loop
                ref={videoRef}
                onClick={handleVideoClick}
                src={url}>
            </video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSideBar 
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    )
}

export default Video;