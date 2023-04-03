import React from 'react'
import './videoFooter.css'
import vinil from '../../../img/vinil.png'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h4>@{name}</h4>
                <p>{description}</p>
                <div className='videoFooter__music'>
                    <MusicNoteIcon className='videoFooter__icon' />
                    <div className='videoFooter__musicText'>
                        <p>{music}</p>
                    </div>
                </div>
            </div>
            <img
                className='videoFooter__record'
                alt='Imagem de um vinil girando'
                src={vinil}
            />

        </div>
    )
}

export default VideoFooter