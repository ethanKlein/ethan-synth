import './Sequencer.scss';
import SequencerNode from './SequencerNode';
import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import sound1 from './sounds/drums1.wav';
import kick1 from './sounds/kick1.wav';
import snare1 from './sounds/snare1.wav';


function Sequencer() {

  const [sequencerOn, setSequencerOn] = useState(false);
  const [currentNodeNum, setCurrentNodeNum] = useState(0);
  const [selectedKicks, setSelectedKicks] = useState([]);
  const [selectedSnares, setSelectedSnares] = useState([]);


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

  function addorRemoveKick(index) {
    if (selectedKicks.indexOf(index) > -1) {
        // remove from array
        let newArray = selectedKicks.filter((num) => num !== index)
        setSelectedKicks(newArray);
    } else {
        // add to array
        setSelectedKicks([
            ...selectedKicks,
            index
          ]);
    }
  }

  function addorRemoveSnare(index) {
    if (selectedSnares.indexOf(index) > -1) {
        // remove from array
        let newArray = selectedSnares.filter((num) => num !== index)
        setSelectedSnares(newArray);
    } else {
        // add to array
        setSelectedSnares([
            ...selectedSnares,
            index
          ]);
    }
  }

  function stopSequencer() {
    setSequencerOn(false);
    setCurrentNodeNum(0);
  }

  return (
    <div className="sequencer-container">
        <div className='sequencer-row-container'>
            {[...Array(16)].map((x, i) =>
                <SequencerNode key={i} onClick={() => {addorRemoveKick(i)}} selectedStatus={selectedKicks.indexOf(i) > -1 ? true : false} currentNodeNum={currentNodeNum} soundFile={kick1} nodeIndex={i} sequencerStatus={sequencerOn}  />
            )}
        </div>
        <div className='sequencer-row-container'>
            {[...Array(16)].map((x, i) =>
                <SequencerNode key={i} onClick={() => {addorRemoveSnare(i)}} selectedStatus={selectedSnares.indexOf(i) > -1 ? true : false} currentNodeNum={currentNodeNum} soundFile={snare1} nodeIndex={i} sequencerStatus={sequencerOn}  />
            )}
        </div>

        <div className="start-button" onClick={() => startSequencer()}>Start</div>
        <div className="stop-button" onClick={() => stopSequencer()}>Stop</div>

    </div>
  );
}

export default Sequencer;
