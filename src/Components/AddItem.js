import React from 'react';
import axios from 'axios';

class AddItem extends React.Component {
    constructor() {
        super();
        this.state = {
            items : []
        }
        // this.retrieveItems = this.retrieveItems.bind(this);
    }
    render() {
        return (
            <div>AddItem Component</div>
        )
    }
}

export default AddItem;