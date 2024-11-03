// src/components/MemberList.js
import React from 'react';
import { Modal, Button, ListGroup, Spinner } from 'react-bootstrap'; // Added Spinner

const MemberList = ({ show, handleClose, members, loading, error }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Community Members</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading members...</span>
            </Spinner>
          </div>
        ) : error ? (
          <div className="alert alert-danger">{error}</div>
        ) : members.length === 0 ? (
          <p>No members in this community.</p>
        ) : (
          <ListGroup variant="flush">
            {members.map((member) => (
              <ListGroup.Item key={member.id}>
                <strong>{member.username}</strong> - {member.email}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MemberList;
