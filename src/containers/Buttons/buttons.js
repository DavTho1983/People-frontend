import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Form from "../Form/form";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
    this.state = {
      showButtons: true,
      edit: "add"
    };
  }

  addHandler(edit) {
    console.log("ADDHANDLER", edit);
    this.setState({
      showButtons: false,
      edit: edit
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
            onClick={() => {
              this.addHandler("add");
            }}
          >
            Add Person
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={() => {
              this.addHandler("edit");
            }}
          >
            Edit Person
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={() => {
              this.addHandler("delete");
            }}
          >
            Delete Person
          </Button>
        </div>
      );
    } else {
      return <Form edit={this.state.edit} />;
    }
  }
}

export default Buttons;
