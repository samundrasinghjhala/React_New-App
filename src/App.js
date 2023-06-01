import React from 'react';
import './App.css';
import { Button, Modal } from 'react-bootstrap';
import Userform from "./userform"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  HandleModal() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>HOICKO</h1>
        </header>
        <Userform />


        <div className='home'>
          <Button onClick={() => this.HandleModal()}>Click me</Button>
          <Modal show={this.state.show} onHide={() => this.HandleModal()}>
            <Modal.Header closeButton>Modal Header</Modal.Header>
            <Modal.Body>
              Model body
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.HandleModal()}>Submit</Button>
              <Button onClick={() => this.HandleModal()}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
