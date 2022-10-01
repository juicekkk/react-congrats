import React, {useEffect, useState} from 'react';
import useSound from 'use-sound';
import styled from "styled-components";

import bgm from '../../bgm/bgm.mp3';
import soundOn from '../../images/sound_on.png';
import soundOff from '../../images/sound_off.png';

const Music = () => {

    let [toggle] = useState(1);
    const [play, {pause}] = useSound(bgm, {
        interrupt: true,
    });

    function SoundToggle(e) {
        if (toggle == 1) {
            toggle = 0;
            e.target.src = soundOn;
            play();
        } else {
            toggle = 1;
            e.target.src = soundOff;
            pause();
        }
    }

    const StyledSound = styled.img`
        @media (min-width:1200px){
            left: 68% !important;
        }
        @media (min-width:640px){
            left: 82%;
            top: 3%;
            transform: translate(-50%, -50%);
        }
        position: fixed;
        z-index: 9999;
        width: 32px;
        top: 2%;
        right: 4%;    
    `;

    return (
        <StyledSound src={soundOff} onClick={SoundToggle}/>
    );

};

export default Music;