import './App.css';
import Home from './components/Home';
import { Component } from 'react';
import Navigation from './components/Navigation';
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
