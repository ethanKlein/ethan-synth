import './Sequencer.scss';
import SequencerNode from './SequencerNode';
import { useState, useEffect } from 'react';


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
            <SequencerNode currentNodeNum={currentNodeNum} nodeIndex={i}  />
        )}

        <div style={{color: 'white'}}>{currentNodeNum}</div>

        <div className="start-button" onClick={() => startSequencer()}>Start</div>
        <div className="stop-button" onClick={() => stopSequencer()}>Stop</div>

    </div>
  );
}

export default Sequencer;
