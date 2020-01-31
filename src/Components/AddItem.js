import React from "react";
import axios from "axios";

class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      brand: "",
      qty: 0
    };
    // this.retrieveItems = this.retrieveItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleClick;

  render() {
    console.log(this.state);
    return (
      <section>
        <input
          name="name"
          placeholder="enter name of item"
          onChange={this.handleChange}
        />
        <input
          name="brand"
          placeholder="enter brand of item"
          onChange={this.handleChange}
        />
        <input name="qty" placeholder="qty" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add Item</button>
      </section>
    );
  }
}

export default AddItem;
