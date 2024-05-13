import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setUserslist } from "../redux/user/userAction";

const UpdateUser = ({ show, onHide, updateId }) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});
  const { usersList } = useSelector((state) => state.user);

  useEffect(() => {
    if (usersList) {
      for (let i = 0; i < usersList.length; i++) {
        if (usersList[i]?.id === updateId) {
          setFormValues({
            ...usersList[i],
            city: usersList[i].address.city,
            zipcode: usersList[i].address.zipcode,
          });
        }
      }
    }
  }, [usersList, updateId]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedUsersList = usersList?.map((user) => {
      if (user.id === updateId) {
        return {
          ...user,
          name: formValues?.name,
          email: formValues?.email,
          phone: formValues?.phone,
          address: {
            ...user.address,
            city: formValues?.city,
            zipcode: formValues?.zipcode,
          },
        };
      }
      return user;
    });

    dispatch(setUserslist(updatedUsersList));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formValues?.name}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formValues?.email}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone"
              name="phone"
              value={formValues?.phone}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your city"
              name="city"
              value={formValues?.city}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your zip code"
              name="zipcode"
              value={formValues?.zipcode}
              onChange={onInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateUser;
