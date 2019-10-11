import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Button from "@material-ui/core/Button";

import SimpleTable from "./containers/Table/table";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <SimpleTable></SimpleTable>
          <Button variant="contained" color="primary">
            Add Person
          </Button>
          <Button variant="contained" color="primary">
            Edit Person
          </Button>
          <Button variant="contained" color="primary">
            Delete Person
          </Button>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
