import React from 'react';
import Item from './Item';
import axios from 'axios';

class List extends React.Component {
    

render () {
    const itemsMapped = this.props.items.map((item, index) => {
        return (
            <Item
                item={item} key={index}
                retrieveItems={this.props.retrieveItems}
            />
        )
    }).reverse();

    return(
        <section>
            <h1>List of Grocery Items</h1>
            {itemsMapped}
        </section>
        )
    }
}

export default List;