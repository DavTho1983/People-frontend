import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Buttons from "./containers/Buttons/buttons";

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
          <Buttons />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
