import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './index.css';

export interface SignUpState {
  avec: boolean;
  option: string;
}

const initialState = {
  avec: false,
  option: 'a',
};
type State = Readonly<typeof initialState>;

export class SignUpForm extends Component<{}, SignUpState> {
  readonly state: State = initialState;

  onChangeAvec = () => {
    this.setState({ avec: !this.state.avec });
  };

  onChangeOptionA = () => {
    this.setState({ option: 'a' });
  };

  onChangeOptionB = () => {
    this.setState({ option: 'b' });
  };

  render() {
    const { avec, option } = this.state;

    return (
      <div className="signup-container">
        <Form>
          <Form.Group controlId="formBasicRadiobutton">
            <Form.Check
              type="radio"
              label="Osallistun"
              checked={option === 'a'}
              onChange={this.onChangeOptionA}
            />
            <Form.Check
              type="radio"
              label="En osallistu"
              checked={option === 'b'}
              onChange={this.onChangeOptionB}
            />
          </Form.Group>
          <Form.Group controlId="formBasicName1">
            <Form.Label>Nimesi:</Form.Label>
            <Form.Control type="name" placeholder="Etunimi Sukunimi" />
          </Form.Group>
          {option === 'a' && (
            <>
              <Form.Group controlId="formBasicAllergies1">
                <Form.Label>Allergiat:</Form.Label>
                <Form.Control type="name" placeholder="" />
              </Form.Group>

              <Form.Group controlId="formBasicCheck">
                <Form.Check
                  type="checkbox"
                  label="Avec osallistuu (täytä vain, jos kutsu kahdelle)"
                  onChange={this.onChangeAvec}
                />
              </Form.Group>

              {avec && (
                <>
                  <Form.Group controlId="formBasicName2">
                    <Form.Label>Avecin nimi:</Form.Label>
                    <Form.Control type="name" placeholder="Etunimi Sukunimi" />
                  </Form.Group>
                  <Form.Group controlId="formBasicAllergies2">
                    <Form.Label>Avecin allergiat:</Form.Label>
                    <Form.Control type="name" placeholder="" />
                  </Form.Group>
                </>
              )}
            </>
          )}
          <Button variant="primary" type="submit">
            Lähetä
          </Button>
        </Form>
      </div>
    );
  }
}
