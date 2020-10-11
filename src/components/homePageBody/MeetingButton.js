import React from 'react';
import language from '../../language/hebrew.json';

const MeetingButton = ()=>{

    return(
    <button className="meeting-button"><div>{language.meetingButton}</div></button>
    );

}
export default MeetingButton;