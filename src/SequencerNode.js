import logo from './logo.svg';
import './SequencerNode.scss';
import ReactAudioPlayer from 'react-audio-player';

function SequencerNode({currentNodeNum, nodeIndex, soundFile}) {

  function playAudio(soundFile) {
     let sound = new Audio(soundFile);
     if (nodeIndex+1 === currentNodeNum) {
        sound.play();
     }
  }

  return (
    <>
        {playAudio(soundFile)}
        <div className={`sequencer-node ${nodeIndex+1 === currentNodeNum ? "on" : "off"}`} />
    </>
  );
}

export default SequencerNode;
