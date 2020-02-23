import React, { useEffect } from 'react';
import AudioPlayer from '../helpers/audioPlayer';

const Home = () => {
    let audioPlayer;

    useEffect(() => {
        console.log('------ useEffect setInstrument');
        audioPlayer = AudioPlayer();
        audioPlayer.setInstrument('acoustic_grand_piano');
    }, []);

    const handleClick = () => {
        audioPlayer.playNote('C4');
    };

    return (
        <div className="app-container">
            <button onClick={handleClick}>Play</button>
        </div>
    );
};

export default Home;
