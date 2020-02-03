import React from "react";
import './../App.css';

const Items = () => {
    return (
    <h2>List of your Grocery Items</h2>
    )
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: ' '};
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        // console.log(this.props)
        return (
            // <h3>Here is your list</h3>
            // <ItemList items={this.state.items} />
            // <form onSubmit={this.handlesSubmit}>
            // </form>
            <div className= "list" key={this.props.key}>
                <p>{this.props.item.nameOfItem}</p>
                <p>{this.props.item.brandOfItem}</p>
                <p>{this.props.item.QTY}</p>
            </div>
        )
    }
}

export default Item;