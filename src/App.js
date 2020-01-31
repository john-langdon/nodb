import React from 'react';
import './App.css';
import Axios from 'axios';
import Header from './Components/Header';
import AddItem from './Components/AddItem';
import List from './Components/List';
import Footer from './Components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
    // this.retrieveItems = this.retrieveItems.bind(this);
  }

  render() {
  return (
    <div className="App">
        <Header />
        <AddItem />
        <List />
        <Footer />
    </div>
  );
  }
}

export default App;
