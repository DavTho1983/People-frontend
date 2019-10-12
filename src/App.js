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
  constructor(props) {
    super(props);
    this.getID = this.getID.bind(this);
    this.state = {
      addNewPerson: false,
      currentID: "empty",
      showButtons: true
    };
  }

  getID(id) {
    this.setState(
      { currentID: id, showButtons: false, addNewPerson: false },
      () => {
        console.log("GETID", this.state.currentID, this.state.showButtons);
      }
    );
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <SimpleTable callbackid={this.getID}></SimpleTable>
          <Buttons
            showButtons={this.state.showButtons}
            addNewPerson={this.state.addNewPerson}
            id={this.state.currentID}
          />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
