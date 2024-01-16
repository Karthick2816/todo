import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddUser({ user, setUser }) {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [status, setStatus] = useState("");
  const handleCreate = () => {
    let id = user.length ? user[user.length - 1].id + 1 : 1;
    console.log(id);
    let newArray = [...user];
    newArray.push({
      id,
      name,
      description,
      status,
    });
    setUser(newArray);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Status"
            onChange={(e) => setStatus(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => handleCreate()}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddUser;
