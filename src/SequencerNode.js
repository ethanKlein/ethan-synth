import logo from './logo.svg';
import './SequencerNode.scss';

function SequencerNode({currentNodeNum, nodeIndex}) {

  return (
    <>
        <div className={`sequencer-node ${nodeIndex+1 === currentNodeNum ? "on" : "off"}`} />
    </>
  );
}

export default SequencerNode;
