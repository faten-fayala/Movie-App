import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      source:'',
      year:'',
      rating:''
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
      this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <div>
        <Button className="plus" variant="primary" onClick={this.handleShow}>
         <i class="fas fa-plus fa-3x"></i>
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div >
              <div className="align-modal">
                <label className="label-modal">Title:</label>
                <input  type="text" name="title" onChange={this.handleChange}/>
              </div>
              <div className="align-modal">
                <label className="label-modal">Image:</label>
                <input  type="text" name="source" onChange={this.handleChange}/>
              </div>
              <div className="align-modal">
                <label className="label-modal">Rating:</label>
                <input  type="text" name="rating" onChange={this.handleChange}/>
              </div>
              <div className="align-modal">
                <label className="label-modal">Year:</label>
                <input  type="text" name="year" onChange={this.handleChange}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button className="plus" variant="primary" onClick={() =>{
                this.props.addNewMovie(this.state)
                this.setState({show:false})
            }}>Add Movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
