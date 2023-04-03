import React, { useState } from 'react'
import './videoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({ likes, messages, shares }) {

    const [liked, setLiked] = useState(false)

    function handleLike() {
        setLiked(!liked)
    }

    return (
        <div className='videoSidebar'>
            <div
                className='videoSidebar__options'
                onClick={handleLike}
            >
                {liked ? <FavoriteIcon className="videoSidebar__icons" /> : <FavoriteBorderIcon className="videoSidebar__icons" />}
                <p className='videoSidebar__text'>{liked ? likes + 1 : likes}</p>
            </div>
            <div className='videoSidebar__options'>
                <ChatIcon className="videoSidebar__icons" />
                <p className='videoSidebar__text'>{messages}</p>
            </div>
            <div className='videoSidebar__options'>
                <ShareIcon className="videoSidebar__icons" />
                <p className='videoSidebar__text'>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar