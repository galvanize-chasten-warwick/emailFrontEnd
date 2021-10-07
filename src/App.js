import logo from './logo.svg';
import './App.css';
import EmailList from './Components/Email List.js';
import Email from './Components/Email.js';
import Compose from './Components/Compose.js';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      emails: [],
      gotData: false,
    };
  }


  async componentDidMount() {
    const url = `http://localhost:3001/emails`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ emails: data });
    this.setState({ gotData: true });
  }

content(){
  const { emails} = this.state;

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Galv-Mail</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Compose</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav> 
        <p>
          {console.log(this.state.emails)}
        </p>
      </header>
      <div className="container .px-4">
        <div className="row">
          <div className="col-4">
            <div className="p-3 border bg-dark">
              <EmailList emails={emails} />
            </div>
          </div>
          <div className="col-8">
            <div className="p-3 border bg-dark">
              <Email emails={emails} />
            </div>
          </div>
          <div className="col-8">
            <div className="p-3 border bg-dark">
              <Compose emails={emails} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  render(){
    return (
      <div>
        {this.state.gotData ? this.content() : null}      
      </div>

    );
  }
}

export default App;
