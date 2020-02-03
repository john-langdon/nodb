import React from "react";
import "./App.css";
import Axios from "axios";
import Header from "./Components/Header";
import AddItem from "./Components/AddItem";
import List from "./Components/List";
import Footer from "./Components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
    this.retrieveItems = this.retrieveItems.bind(this);
  }

  componentDidMount() {
    Axios
      .get('/api/items')
      .then(res => {this.setState({ items: res.data })})
      .catch(error => console.log(error));
    
  }
retrieveItems(itemsRes) {
  this.setState({ items: itemsRes})
 }

  render() {
    console.log(this.state.items)
    return (
      <div className="App">
        <Header />
        <AddItem retrieveItems={this.retrieveItems} />
        <List items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
