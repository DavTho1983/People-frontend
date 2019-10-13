import gql from "graphql-tag";

export const ADD_PERSON = gql`
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

export const EDIT_PERSON = gql`
  mutation personEdit($id: ID!, $input: PersonInputType!) {
    personEdit(id: $id, input: $input) {
      ok
    }
  }
`;

export const DELETE_PERSON = gql`
  mutation personDelete($id: ID!) {
    personDelete(id: $id) {
      ok
    }
  }
`;
