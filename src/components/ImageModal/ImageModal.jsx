import Modal from 'react-modal';
Modal.setAppElement('#root');
import { CgCloseO } from 'react-icons/cg';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const ImageModal = ({ modalIsOpen, closeModal, selectedImg }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Expended image"
      appElement={document.getElementById('root')}
    >
      <button
        onClick={closeModal}
        style={{ border: 'none', background: 'none', cursor: 'pointer' }}
      >
        <CgCloseO size={30} />
      </button>

      {selectedImg && (
        <div>
          <img src={selectedImg.url} alt={selectedImg.description || 'Image'} />
          {selectedImg.description && <p>{selectedImg.description}</p>}
          <p>Author: {selectedImg.author}</p>
          <p>Likes: {selectedImg.likes}</p>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
