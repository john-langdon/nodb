import React from "react";
import axios from "axios";

class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      nameOfItem: "",
      brandOfItem: "",
      QTY: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleClick() {
      axios
      .post('/api/items', this.state)
      .then(res => this.props.retrieveItems(res.data))
      .catch(error => console.log(error));
  }


  render() {
    console.log(this.state);
    return (
      <section>
        <input
          name="nameOfItem"
          placeholder="enter name of item"
          onChange={this.handleChange}
        />
        <input
          name="brandOfItem"
          placeholder="enter brand of item"
          onChange={this.handleChange}
        />
        <input name="QTY" placeholder="qty" onChange={this.handleChange} />
        <button
         onClick={this.handleClick}>Add Item</button>
      </section>
    );
  }
}

export default AddItem;
