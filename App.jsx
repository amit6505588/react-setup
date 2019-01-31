import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              React Tutorials
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-user" /> Sign Up
              </a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-log-in" /> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="jumbotron">
          Hello Welcome to react<div>First</div>
        </div>
      </div>
    );
  }
}

export default App;
