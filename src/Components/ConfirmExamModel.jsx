import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to leave the test? Your progress will not be saved.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Continue Exam
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                    End Test
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmModal;
