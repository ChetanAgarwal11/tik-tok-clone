import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

const VideoFooter = ({ channel, description, song}) => {
    return (
        <div className="videoFooter">
            <div className="details">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooterTicker">
                    <MusicNoteIcon className="videoFooterIcon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img 
                src="https://static.thenounproject.com/png/934821-200.png"
                alt="disc"
                className="videoFooterRecord"
            />
        </div>
    )
}

export default VideoFooter;