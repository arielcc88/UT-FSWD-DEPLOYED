import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import "../App.css";

function InstructorSignupModal(props) {
    return (
      <Modal
        {...props} className="signup-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign-up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="signup-first-name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control controlId="signup-first-name" type="text" placeholder="First name" />
                </Form.Group>
                <Form.Group controlId="signup-first-name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control controlId="signup-first-name" type="text" placeholder="Last name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control controlId="userID-Login" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock" 
                        placeholder="Password"
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers, and
                        must not contain spaces, special characters, or emoji.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label htmlFor="inputPassword5">Re-enter Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Password"
                    />
                </Form.Group>
                <Button className="primary-button" onClick={props.onHide}>Create Account</Button>
            </Form>
        </Modal.Body>   
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Login</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

  export default InstructorSignupModal;