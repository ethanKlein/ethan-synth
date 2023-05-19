import './Sequencer.scss';
import SequencerNode from './SequencerNode';
import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import sound1 from './sounds/drums1.wav'
import kick1 from './sounds/kick1.wav'


function Sequencer() {

  const [sequencerOn, setSequencerOn] = useState(false);  
  const [currentNodeNum, setCurrentNodeNum] = useState(1);


  // sequencer setInterval
  useEffect(() => {
    // get out of here if sequencer isn't on
    if (!sequencerOn) {
        return;
    }

    const interval = setInterval(() => {
        let newNodeNum = currentNodeNum;
        if (newNodeNum < 16) {
            newNodeNum++;
        } else {
            newNodeNum = 1;
        }
        setCurrentNodeNum(newNodeNum);
    }, 500);

    //Clearing the interval
    return () => clearInterval(interval);
    }, [sequencerOn, currentNodeNum]);


  function startSequencer() {
    setSequencerOn(true);
  }

  function stopSequencer() {
    setSequencerOn(false);
    setCurrentNodeNum(1);
  }

  return (
    <div className="sequencer-container">
        {[...Array(16)].map((x, i) =>
            <SequencerNode key={i} currentNodeNum={currentNodeNum} soundFile={kick1} nodeIndex={i}  />
        )}

        <div style={{color: 'white'}}>{currentNodeNum}</div>

        <div className="start-button" onClick={() => startSequencer()}>Start</div>
        <div className="stop-button" onClick={() => stopSequencer()}>Stop</div>

    </div>
  );
}

export default Sequencer;
