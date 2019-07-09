import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { LoginForm } from '../LoginForm';
import { sendEmail } from '../../utils/email';
import './index.css';

const localStorageKey = 'KA_WEDDING_RSVP_SUBMITTED';

export const SignUpForm: React.FC = () => {
  const [avec, setAvec] = React.useState(false);
  const [participating, setParticipating] = React.useState(true);
  const [avecParticipating, setAvecParticipating] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(
    localStorage.getItem(localStorageKey) === 'TRUE'
  );
  const [loginResult, setLoginResult] = React.useState(false);
  const [validated, setValidated] = React.useState(false);
  const [submitResult, setSubmitResult] = React.useState(true);
  const [sending, setSending] = React.useState(false);

  const onChangeOption = (option: boolean) => {
    setParticipating(option);
  };

  const onChangeOptionAvec = (option: boolean) => {
    setAvecParticipating(option);
  };

  const onLogin = (code: string) => {
    const singleCode = process.env.REACT_APP_SINGLE_CODE;
    const avecCode = process.env.REACT_APP_AVEC_CODE;

    if (code === singleCode || code === avecCode) {
      setLoginResult(true);

      if (code === avecCode) {
        setAvec(true);
        setAvecParticipating(true);
      }
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget as HTMLFormElement;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const name = form.mainName.value;
    const allergies = participating ? form.mainAllergies.value : '';
    const nonAlcohol = participating ? form.mainNonAlcohol.checked : false;
    const avecName = avecParticipating ? form.avecName.value : '';
    const avecAllergies = avecParticipating ? form.avecAllergies.value : '';
    const avecNonAlcohol = avecParticipating
      ? form.avecNonAlcohol.checked
      : false;

    let emailMessage = '';
    if (participating) {
      emailMessage += `${name} OSALLISTUU ${allergies}${
        nonAlcohol ? ' ALKOHOLITON' : ''
      }`;
    } else {
      emailMessage += `${name} EI OSALLISTU`;
    }

    if (avec) {
      if (avecParticipating) {
        emailMessage += ` & AVEC ${avecName} OSALLISTUU ${avecAllergies}${
          avecNonAlcohol ? ' ALKOHOLITON' : ''
        }`;
      } else {
        emailMessage += ` & AVEC EI OSALLISTU`;
      }
    }

    let result = true;
    try {
      setSending(true);
      await sendEmail(emailMessage);
    } catch (error) {
      result = false;
    }
    localStorage.setItem(localStorageKey, result ? 'TRUE' : 'FALSE');

    setFormSubmitted(true);
    setSubmitResult(result);
    setSending(false);
  };

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
        <LoginForm onLogin={code => onLogin(code)} />
      </div>
    );
  }

  return (
    <div className="signup-container">
      <Form noValidate validated={validated} onSubmit={onSubmit}>
        <input type="hidden" value="prayer" />
        <Form.Group controlId="rbParticipation">
          <Form.Check
            type="radio"
            name="radioButtonA"
            label="Osallistun"
            checked={participating}
            onChange={() => onChangeOption(true)}
          />
          <Form.Check
            type="radio"
            name="radioButtonB"
            label="En osallistu"
            checked={!participating}
            onChange={() => onChangeOption(false)}
          />
        </Form.Group>
        <Form.Group controlId="inputName1">
          <Form.Label>Nimesi:</Form.Label>
          <Form.Control
            type="text"
            name="mainName"
            placeholder="Etunimi Sukunimi"
            autoComplete="off"
            required
          />
          <Form.Control.Feedback type="invalid">
            Syötä nimesi.
          </Form.Control.Feedback>
        </Form.Group>
        {participating && (
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
            <Form.Group controlId="checkBoxNonAlcohol1">
              <Form.Check
                name="mainNonAlcohol"
                type="checkbox"
                label="Alkoholiton"
              />
            </Form.Group>
          </>
        )}
        {avec && (
          <>
            <Form.Group controlId="rbAvecParticipation">
              <Form.Check
                type="radio"
                name="radioButtonAavec"
                label="Avec osallistuu"
                checked={avecParticipating}
                onChange={() => onChangeOptionAvec(true)}
              />
              <Form.Check
                type="radio"
                name="radioButtonBavec"
                label="Avec ei osallistu"
                checked={!avecParticipating}
                onChange={() => onChangeOptionAvec(false)}
              />
            </Form.Group>
            {avecParticipating && (
              <>
                <Form.Group controlId="inputName2">
                  <Form.Label>Avecin nimi:</Form.Label>
                  <Form.Control
                    type="text"
                    name="avecName"
                    placeholder="Etunimi Sukunimi"
                    autoComplete="off"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Syötä avecin nimi.
                  </Form.Control.Feedback>
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
                <Form.Group controlId="checkBoxNonAlcohol2">
                  <Form.Check
                    name="avecNonAlcohol"
                    type="checkbox"
                    label="Alkoholiton"
                  />
                </Form.Group>
              </>
            )}
          </>
        )}
        <Button block variant="primary" type="submit">
          {submitButtonText}
        </Button>
      </Form>
    </div>
  );
};
