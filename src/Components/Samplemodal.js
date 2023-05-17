import React, { useState } from 'react';

const SamplePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="samplemodal">
      <h1>Sample Modal Page</h1>
      <button onClick={handleButtonClick} className="show-modal-button">Show Modal</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Sample Modal</h2>
            <button onClick={handleCloseModal} className="close-modal-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SamplePage;
