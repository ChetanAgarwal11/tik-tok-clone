import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const VideoSideBar = ({ likes, shares, messages }) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(prevLiked => {
            return !prevLiked
        })
    }

    return (
        <div className="videoSidebar">
            <div className="videoSidebar_opt">
                { liked ? (
                    <FavoriteIcon 
                        onClick={handleLike}
                    />
                    ) : (
                    <FavoriteBorderIcon
                        onClick={handleLike}
                    />
                    )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar_opt">
                <MessageIcon />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar_opt">
                <ShareIcon />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSideBar;