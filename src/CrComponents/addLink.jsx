import React, { Component } from "react";
import firebase from "../firebase";
import Modal from "react-bootstrap/Modal";

class AddLink extends Component {
  state = {
    show: false,
    link: "",
    text: "",
    isOfficial: false,
  };

  // toggle show state
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  // modal show/hide class
  showHideClassName = () => (this.state.show ? "" : "d-none");

  styles = {
    position: "fixed",
    background: "pink",
    color: "black",
    width: "60%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1,
    boxShadow: "2px 2px 10px 10px rgba(255, 31, 255, 0.226)",
  };

  render() {
    return (
      <div>
        <button className="btn-lg btn-info m-1" onClick={this.showModal}>
          Add Link
        </button>
        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="modal-dialog-scrollable modal-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h3 className="mt-2">Add Link Details:</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.callAddAnnouncement}>
              {this.getForm()}
              <div>
                <button type="submit" className="btn btn-success m-2">
                  Add Link
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

  getForm = () => {
    return (
      <div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Link:</label>
          <div className="col-sm-9">
            <input
              type="url"
              className="form-control"
              placeholder="https://link.com"
              name="link"
              value={this.state.link}
              required
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Description:</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="about the link"
              name="text"
              value={this.state.text}
              required
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="linkIsOfficial"
            name="isOfficial"
            onChange={(e) => this.setState({ isOfficial: e.target.checked })}
          />
          <label
            className="m-2 mb-0 custom-control-label"
            htmlFor="linkIsOfficial"
          >
            Official
          </label>
        </div>
      </div>
    );
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  callAddAnnouncement = (e) => {
    e.preventDefault(); // preventing reload
    const newLink = {
      dateAndTime: firebase.firestore.Timestamp.fromDate(new Date()),
      type: "link",
      text: this.state.text,
      link: this.state.link,
      isOfficial: this.state.isOfficial,
    };
    this.props.addLink(newLink);
    this.setState({
      text: "",
      link: "",
      isOfficial: false,
    });
    this.hideModal();
  };
}

export default AddLink;
