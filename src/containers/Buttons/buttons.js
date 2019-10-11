import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler() {
    console.log("ADDHANDLER");
  }

  render() {
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
  }
}

export default Buttons;
