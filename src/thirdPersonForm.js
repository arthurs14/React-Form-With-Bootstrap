import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
import logo from './zenva-academy.png';

class ThirdPersonForm extends Component {
  state = {
    username: '',
    date: '',
    sex: '',
    race: '',
  }

  setUsername = (ev) => {
    this.setState({
      username: ev.target.value,
    });
  }

  setDate = (ev) => {
    this.setState({
      date: ev.target.value,
    });
  }

  setSex = (ev) => {
    this.setState({
      sex: ev.target.value,
    });
  }

  setRace = (ev) => {
    this.setState({
      race: ev.target.value,
    });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, date } = this.state;

    alert(`Response Submitted for ${username} on ${date}`);
  }

  render() {
    const { username, date, sex, race } = this.state;
    return (
      <Container>
        <Row>
          <Col med={{ span: 7, offset: 3 }}>
            <Jumbotron>
              <img width={100} src={logo} alt="logo" />
              <p>
                Welcome to Apex Legends. Fill out some information about the battle royale mode and third person mode so that we can improve the game over time!
            </p>

              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <h2>Third Person Submission</h2>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="input"
                    value={username} placeholder="Username"
                    onChange={this.setUsername}
                  />
                </Form.Group>

                <Form.Group controlId="formBirth">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" value={date} onChange={this.setDate} />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formSex">
                    <Form.Label>Sex</Form.Label>
                    <Form.Control
                      as="select"
                      value={sex}
                      onChange={this.setSex}
                    >
                      <option>-Sex-</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formEthnicity">
                    <Form.Label>Ethnicity</Form.Label>
                    <Form.Control
                      as="select"
                      value={race}
                      onChange={this.setRace}
                    >
                      <option>-Race-</option>
                      <option>White</option>
                      <option>Hispanic</option>
                      <option>Black or African American</option>
                      <option>American Indian or Alaska Native</option>
                      <option>Asian</option>
                      <option>Native Hawaiian or Other Pacific Islander</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formPlaytime">
                    <Form.Label>Playtime</Form.Label>
                    <Form.Check
                      type="radio"
                      label="Daily"
                      name="formRadio1"
                      ids="formRadio1"
                    />
                    <Form.Check
                      type="radio"
                      label="Frequently"
                      name="formRadio1"
                      ids="formRadio1"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formOutcome">
                    <Form.Label>Enjoy this mode over Battle Royale Mode?</Form.Label>
                    <Form.Check
                      type="radio"
                      label="Yes"
                      name="formRadio2"
                      ids="formRadio2"
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      name="formRadio2"
                      ids="formRadio2"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Label>Comment and Concerns About Third Person Mode</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ThirdPersonForm;