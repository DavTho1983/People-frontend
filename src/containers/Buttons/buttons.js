import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Form from "../Form/form";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
    this.state = {
      showButtons: true
    };
  }

  addHandler() {
    console.log("ADDHANDLER");
    this.setState({
      showButtons: false
    });
  }

  render() {
    if (this.state.showButtons) {
      return (
        <div className="Buttons">
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={this.addHandler}
          >
            Add Person
          </Button>
          <Button variant="contained" color="primary" className="button">
            Edit Person
          </Button>
          <Button variant="contained" color="primary" className="button">
            Delete Person
          </Button>
        </div>
      );
    } else {
      return <Form />;
    }
  }
}

export default Buttons;
