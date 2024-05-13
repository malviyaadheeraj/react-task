import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

const ViewUser = ({ show, onHide, viewId }) => {
  const [userDetails, setUserDetails] = useState({});
  const { usersList } = useSelector((state) => state.user);

  useEffect(() => {
    if (usersList) {
      for (let i = 0; i < usersList.length; i++) {
        if (usersList[i]?.id === viewId) {
          setUserDetails({
            ...usersList[i],
            city: usersList[i].address.city,
            zipcode: usersList[i].address.zipcode,
          });
        }
      }
    }
  }, [usersList, viewId]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>View User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={userDetails?.name}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={userDetails?.email}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone"
              value={userDetails?.phone}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your city"
              value={userDetails?.city}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your zip code"
              value={userDetails?.zipcode}
              disabled
            />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ViewUser;
