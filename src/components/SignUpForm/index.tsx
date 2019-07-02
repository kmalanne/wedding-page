import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { LoginForm } from '../LoginForm';
import { sendEmail } from '../../utils/email';
import './index.css';

export interface SignUpState {
  avec: boolean;
  option: boolean;
  optionAvec: boolean;
  formSubmitted: boolean;
  loginResult: boolean;
  submitResult: boolean;
  sending: boolean;
}

const initialState = {
  avec: false,
  option: true,
  optionAvec: true,
  loginResult: false,
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

  onChangeOption = (option: boolean) => {
    this.setState({ option });
  };

  onChangeOptionAvec = (optionAvec: boolean) => {
    this.setState({ optionAvec });
  };

  onLogin = (code: string) => {
    const singleCode = process.env.REACT_APP_SINGLE_CODE;
    const avecCode = process.env.REACT_APP_AVEC_CODE;

    if (code === singleCode || code === avecCode) {
      this.setState({
        loginResult: true,
        avec: code === avecCode,
      });
    }
  };

  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;
    const participating = target.radioButtonA.checked;
    const name = target.mainName.value;
    const allergies = participating ? target.mainAllergies.value : '';
    const avecParticipating = this.state.avec
      ? target.radioButtonAavec.checked
      : false;
    const avecName = target.avecName.value;
    const avecAllergies = avecParticipating ? target.avecAllergies.value : '';

    let emailMessage = '';
    if (participating) {
      emailMessage += `${name} OSALLISTUU ${allergies} // `;
    } else {
      emailMessage += `${name} EI OSALLISTU // `;
    }

    if (avecParticipating) {
      emailMessage += `AVEC ${avecName} OSALLISTUU ${avecAllergies}`;
    } else {
      emailMessage += `AVEC ${avecName} EI OSALLISTU`;
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
    const {
      avec,
      option,
      optionAvec,
      formSubmitted,
      loginResult,
      submitResult,
      sending,
    } = this.state;

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

    if (!loginResult) {
      return (
        <div className="signup-container">
          <LoginForm onLogin={code => this.onLogin(code)} />
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
              checked={option}
              onChange={() => this.onChangeOption(true)}
            />
            <Form.Check
              type="radio"
              name="radioButtonB"
              label="En osallistu"
              checked={!option}
              onChange={() => this.onChangeOption(false)}
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
          {option && (
            <Form.Group controlId="inputAllergies1">
              <Form.Label>Allergiat:</Form.Label>
              <Form.Control
                type="text"
                name="mainAllergies"
                placeholder=""
                autoComplete="off"
              />
            </Form.Group>
          )}
          {avec && (
            <>
              <Form.Group controlId="rbAvecParticipation">
                <Form.Check
                  type="radio"
                  name="radioButtonAavec"
                  label="Avec osallistuu"
                  checked={optionAvec}
                  onChange={() => this.onChangeOptionAvec(true)}
                />
                <Form.Check
                  type="radio"
                  name="radioButtonBavec"
                  label="Avec ei osallistu"
                  checked={!optionAvec}
                  onChange={() => this.onChangeOptionAvec(false)}
                />
              </Form.Group>
              <Form.Group controlId="inputName2">
                <Form.Label>Avecin nimi:</Form.Label>
                <Form.Control
                  type="text"
                  name="avecName"
                  placeholder="Etunimi Sukunimi"
                  autoComplete="off"
                />
              </Form.Group>
              {optionAvec && (
                <Form.Group controlId="inputAllergies2">
                  <Form.Label>Avecin allergiat:</Form.Label>
                  <Form.Control
                    type="text"
                    name="avecAllergies"
                    placeholder=""
                    autoComplete="off"
                  />
                </Form.Group>
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
