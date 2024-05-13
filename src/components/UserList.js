import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList, setUserslist } from "../redux/user/userAction";
import AddUsers from "./AddUsers";
import UpdateUser from "./UpdateUser";
import ViewUser from "./ViewUser";

const UserList = () => {
  const dispatch = useDispatch();
  const [updateId, setUpdateId] = useState();
  const [viewId, setViewId] = useState();
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showViewPopup, setViewUpdatePopup] = useState(false);
  const { usersList } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  const addPopupClose = () => setShowAddPopup(false);
  const appPopupOpen = () => setShowAddPopup(true);
  const updatePopupClose = () => setShowUpdatePopup(false);
  const updatePopupOpen = (id) => {
    setShowUpdatePopup(true);
    setUpdateId(id);
  };
  const viewPopupClose = () => setViewUpdatePopup(false);
  const viewPopupOpen = (id) => {
    setViewUpdatePopup(true);
    setViewId(id);
  };

  const handleDeleteUser = (id) => {
    const updatedUserList = usersList?.filter((item) => item.id !== id);

    dispatch(setUserslist(updatedUserList));
  };

  return (
    <>
      <Col md={10} className="mx-auto mt-4">
        <Button className="mb-3" onClick={appPopupOpen}>
          Add User
        </Button>
        <Table stripped bordered hover size="sm">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City Name</th>
              <th>Zip Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersList?.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address.city}</td>
                <td>{item.address.zipcode}</td>
                <td>
                  <Button
                    className="me-2"
                    variant="success"
                    onClick={() => viewPopupOpen(item.id)}
                  >
                    View
                  </Button>
                  <Button
                    className="me-2"
                    variant="primary"
                    onClick={() => updatePopupOpen(item.id)}
                  >
                    Update
                  </Button>
                  <Button
                    className="me-2"
                    variant="danger"
                    onClick={() => handleDeleteUser(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>

      <AddUsers show={showAddPopup} onHide={addPopupClose} />
      <UpdateUser
        show={showUpdatePopup}
        onHide={updatePopupClose}
        updateId={updateId}
      />
      <ViewUser show={showViewPopup} onHide={viewPopupClose} viewId={viewId} />
    </>
  );
};

export default UserList;
