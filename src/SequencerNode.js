import logo from './logo.svg';
import './SequencerNode.scss';
import ReactAudioPlayer from 'react-audio-player';

function SequencerNode({currentNodeNum, nodeIndex, soundFile, sequencerStatus, selectedStatus, ...rootDOMAttributes}) {

  function playAudio(soundFile) {
     let sound = new Audio(soundFile);
     if (nodeIndex+1 === currentNodeNum && sequencerStatus && selectedStatus) {
        sound.play();
     }
  }

  return (
    <>
        {playAudio(soundFile)}
        <div {...rootDOMAttributes} className={`sequencer-node ${nodeIndex+1 === currentNodeNum ? "on" : "off"} ${selectedStatus ? "selected" : ""}`} />
    </>
  );
}

export default SequencerNode;
