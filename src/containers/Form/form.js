import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useMutation } from "@apollo/react-hooks";

import gql from "graphql-tag";

const ADD_PERSON = gql`
  mutation personCreate($input: PersonInputType!) {
    personCreate(input: $input) {
      person {
        firstName
        lastName
        address
      }
    }
  }
`;

function Form(props) {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [address, setAddress] = useState("");

  const [addPerson, { data }] = useMutation(ADD_PERSON);

  const handleFirstNameInput = e => {
    setFirstname(e.target.value);
  };
  const handleLastNameInput = e => {
    setLastname(e.target.value);
  };
  const handleAddressInput = e => {
    setAddress(e.target.value);
  };

  return (
    <div>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
