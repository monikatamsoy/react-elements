import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

//components
import Header from './components/headercomponent/header';
import Footer from './components/footercomponent/footer';
import Homepage from './components/pages/homepage';
import About from './components/pages/about';
//includes
import './Assets/css/default.min.css';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/About' component={About} />

        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
