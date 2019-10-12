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
  mutation personEdit($id: String!, $input: PersonInputType!) {
    personEdit(id: id, input: $input) {
      person {
        id
      }
    }
  }
`;

export const DELETE_PERSON = gql`
  mutation personEdit($id: String!) {
    personDelete(id: id) {
      person {
        ok
      }
    }
  }
`;
