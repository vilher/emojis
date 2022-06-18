import React from 'react';
import Entry from './Entry';
import emojiDao from './emojiDao.js';



function Dictionary(){
    return (<div className="dictionary">
    {emojiDao.map(props =>(
    <Entry key={props.id} emoji={props.emoji} info= {props.meaning} name= {props.name}/>
    ))}
    </div>
    )
}

export default Dictionary;