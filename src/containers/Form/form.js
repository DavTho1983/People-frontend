import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/react-hooks";

import { ADD_PERSON, EDIT_PERSON, DELETE_PERSON } from "../../constants";

function Form(props) {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [idx, setID] = useState("");

  const [addPerson, { data }] = useMutation(ADD_PERSON);
  const [editPerson, { editdata }] = useMutation(EDIT_PERSON);
  const [deletePerson, { deletedata }] = useMutation(DELETE_PERSON);

  const handleFirstNameInput = e => {
    setFirstname(e.target.value);
  };
  const handleLastNameInput = e => {
    setLastname(e.target.value);
  };
  const handleAddressInput = e => {
    setAddress(e.target.value);
  };
  const handleIDInput = e => {
    setID(e.target.value);
  };

  if ("add" === props.edit) {
    return (
      <div>
        <h1>{props.edit} person</h1>
        <form
          autoComplete="off"
          onSubmit={e => {
            e.preventDefault();
            addPerson({
              variables: {
                input: {
                  firstName: firstName,
                  lastName: lastName,
                  address: address
                }
              }
            });
          }}
        >
          <TextField
            id="first-name"
            label="First name"
            default={props.firstName}
            onChange={handleFirstNameInput}
            margin="normal"
          />
          <TextField
            id="last-name"
            label="Last name"
            onChange={handleLastNameInput}
            margin="normal"
          />
          <TextField
            id="address"
            label="Address"
            onChange={handleAddressInput}
            margin="normal"
          />
          <Button color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  } else if ("edit" === props.edit) {
    return (
      <div>
        <h1>{props.edit} person</h1>
        <form
          autoComplete="off"
          onSubmit={e => {
            e.preventDefault();
            editPerson({
              variables: {
                id: idx,
                input: {
                  firstName: firstName,
                  lastName: lastName,
                  address: address
                }
              }
            });
          }}
        >
          <TextField
            id="person-id"
            label="ID"
            onChange={handleIDInput}
            margin="normal"
          />
          <TextField
            id="first-name"
            label="First name"
            onChange={handleFirstNameInput}
            margin="normal"
          />
          <TextField
            id="last-name"
            label="Last name"
            onChange={handleLastNameInput}
            margin="normal"
          />
          <TextField
            id="address"
            label="Address"
            onChange={handleAddressInput}
            margin="normal"
          />
          <Button type="submit" className="button">
            Submit
          </Button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{props.edit} person</h1>
        <form
          autoComplete="off"
          onSubmit={e => {
            e.preventDefault();
            deletePerson({
              variables: {
                id: idx
              }
            });
          }}
        >
          <TextField
            id="person-id"
            label="ID"
            onChange={handleIDInput}
            margin="normal"
          />
          <Button type="submit" className="button">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
