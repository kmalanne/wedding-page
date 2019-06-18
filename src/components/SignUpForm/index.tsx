import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { sendEmail } from '../../utils/email';
import './index.css';

export interface SignUpState {
  avec: boolean;
  option: string;
  formSubmitted: boolean;
  submitResult: boolean;
  sending: boolean;
}

const initialState = {
  avec: false,
  option: 'a',
  formSubmitted: false,
  submitResult: true,
  sending: false,
};
type State = Readonly<typeof initialState>;

const localStorageKey = 'KA_WEDDING_RSVP_SUBMITTED';

export class SignUpForm extends Component<{}, SignUpState> {
  readonly state: State = initialState;

  constructor(props: any) {
    super(props);

    this.state = {
      ...initialState,
      formSubmitted: localStorage.getItem(localStorageKey) === 'TRUE',
    };
  }

  onChangeAvec = () => {
    this.setState({ avec: !this.state.avec });
  };

  onChangeOptionA = () => {
    this.setState({ option: 'a' });
  };

  onChangeOptionB = () => {
    this.setState({ option: 'b' });
  };

  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;
    const participating = target.radioButtonA.checked;
    const name = target.mainName.value;
    const allergies = participating ? target.mainAllergies.value : '';
    const avecParticipating = participating ? target.avec.checked : false;
    const avecName = avecParticipating ? target.avecName.value : '';
    const avecAllergies = avecParticipating ? target.avecAllergies.value : '';

    let emailMessage = '';
    if (participating) {
      emailMessage += `
      ${name}: OSALLISTUU,
      Allergiat: ${allergies} `;

      emailMessage += avecParticipating
        ? `Avec ${avecName}: OSALLISTUU, Avec allergiat: ${avecAllergies}`
        : 'Avec EI OSALLISTU';
    } else {
      emailMessage = `${name} EI OSALLISTU`;
    }

    let result = true;
    try {
      this.setState({
        sending: true,
      });
      await sendEmail(emailMessage);
    } catch (error) {
      result = false;
    }
    //localStorage.setItem(localStorageKey, result ? "TRUE" : "FALSE");

    this.setState({
      formSubmitted: true,
      submitResult: result,
      sending: false,
    });
  };

  render() {
    const { avec, option, formSubmitted, submitResult, sending } = this.state;

    const submitButtonText = sending ? 'Lähettää...' : 'Lähetä';

    if (formSubmitted) {
      if (!submitResult) {
        return (
          <div className="signup-result signup-failure">
            <p>
              Ilmoittautumisessa tapahtui virhe! Yritä uudelleen tai ilmottaudu
              suoraan sähköpostilla. Osoitteen löydät Yhteystiedot -sivulta.
            </p>
          </div>
        );
      }

      return (
        <div className="signup-result">
          <p>
            Kiitos ilmoittautumisestasi! Jos ilmoittautumiseesi tulee muutoksia,
            ilmoitathan siitä meille sähköpostilla tai tekstiviestillä
            mahdollisimman pian.
          </p>
        </div>
      );
    }

    return (
      <div className="signup-container">
        <Form onSubmit={this.onSubmit}>
          <input type="hidden" value="prayer" />
          <Form.Group controlId="rbParticipation">
            <Form.Check
              type="radio"
              name="radioButtonA"
              label="Osallistun"
              checked={option === 'a'}
              onChange={this.onChangeOptionA}
            />
            <Form.Check
              type="radio"
              name="radioButtonB"
              label="En osallistu"
              checked={option === 'b'}
              onChange={this.onChangeOptionB}
            />
          </Form.Group>
          <Form.Group controlId="inputName1">
            <Form.Label>Nimesi:</Form.Label>
            <Form.Control
              type="text"
              name="mainName"
              placeholder="Etunimi Sukunimi"
              autoComplete="off"
            />
          </Form.Group>
          {option === 'a' && (
            <>
              <Form.Group controlId="inputAllergies1">
                <Form.Label>Allergiat:</Form.Label>
                <Form.Control
                  type="text"
                  name="mainAllergies"
                  placeholder=""
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group controlId="checkAvec">
                <Form.Check
                  type="checkbox"
                  name="avec"
                  label="Avec osallistuu (täytä vain, jos kutsu kahdelle)"
                  onChange={this.onChangeAvec}
                />
              </Form.Group>

              {avec && (
                <>
                  <Form.Group controlId="inputName2">
                    <Form.Label>Avecin nimi:</Form.Label>
                    <Form.Control
                      type="text"
                      name="avecName"
                      placeholder="Etunimi Sukunimi"
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group controlId="inputAllergies2">
                    <Form.Label>Avecin allergiat:</Form.Label>
                    <Form.Control
                      type="text"
                      name="avecAllergies"
                      placeholder=""
                      autoComplete="off"
                    />
                  </Form.Group>
                </>
              )}
            </>
          )}
          <Button variant="primary" type="submit">
            {submitButtonText}
          </Button>
        </Form>
      </div>
    );
  }
}
