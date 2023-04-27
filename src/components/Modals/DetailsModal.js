import BottomModal from './BottomModal';

const DetailsModal = ({ hide, onHide, selectedNode }) => {
  console.log(selectedNode);
  return (
    <BottomModal hide={hide} onHide={onHide}>
      <div>{`${selectedNode?.title} `}</div>
      <div>{`Corequisitos: ${
        selectedNode?.corequisites?.length > 0
          ? selectedNode.corequisites
          : 'Nenhum'
      }`}</div>
      <div>{`Prerequisitos: ${
        selectedNode?.prerequisites?.length > 0
          ? selectedNode.prerequisites
          : 'Nenhum'
      }`}</div>
    </BottomModal>
  );
};

export default DetailsModal;
