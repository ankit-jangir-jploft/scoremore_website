import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div
      className={`modal fade ${isOpen ? 'show d-block' : ''}`}
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-danger">Confirm Action</h5>
            {/* Improved close button with proper styles */}
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p className="text-dark">
              Do you really want to end the test?
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={onConfirm}>
              Yes
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
