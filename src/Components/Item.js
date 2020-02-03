import React from "react";
import './../App.css';
import Axios from "axios";

const Items = () => {
    return (
    <h2>List of your Grocery Items</h2>
    )
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: ' ', QTY: 0};
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete() {
        Axios
        .delete(`/api/items/${this.props.item.id}`)
        .then(res => this.props.retrieveItems(res.data))
        .catch(error => console.log(error));
    }

    handleEdit() {
        const {QTY}=this.state
        Axios
        .put(`/api/items/${this.props.item.id}`, {QTY})
        .then(res => this.props.retrieveItems(res.data))
        .catch(error => console.log(error))
    }

    render() {
        // console.log(this.props)
        return (
            <div className= "list" key={this.props.key}>
                <p>{this.props.item.nameOfItem}</p>
                <p>{this.props.item.brandOfItem}</p>
                <p>{this.props.item.QTY}</p>
                <input type='number' placeholder="new QTY" onChange={(e) => this.setState({ QTY: e.target.value })}/>
                <button onClick={this.handleEdit}>Edit QTY</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default Item;