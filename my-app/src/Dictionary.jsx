import React from 'react';
import Entry from './Entry';
import emojiDao from './emojiDao.js';

function getEmojiDao(props){
    return(
    <Entry 
        key={props.id}
        emoji={props.emoji}
        info= {props.meaning}
         name= {props.name}
    />
    );
};

function Dictionary(){
    return <div className="dictionary">
    {emojiDao.map(getEmojiDao)}
    </div>
}

export default Dictionary;