import './Contact.css';
import { useState } from "react";
import { validateEmail } from '../../../utils/string-helpers';
import { contactUs } from "../../../services/contact";

const pause = (millis) => new Promise((resolve) => setTimeout(resolve, millis));

const defaultFormFields = { name: '', email: '', message: '' };
const defaultErr = {
  showNameRequired: '',
  showEmailRequired: '',
  showEmailMustBeValid: '',
  showMessageRequired: '',
};

export default function Contact() {
  const [ formState, setFormState ] = useState(defaultFormFields)
  const [ messageSent, setMessageSent ] = useState('');
  const [ err, setErr ] = useState(defaultErr);
  const [ submitDisabled, setSubmitDisabled ] = useState(true);
  const { name, email, message } = formState;

  function formNotReady({ name, email, message }) {
    return !(name && email && validateEmail(email) && message);
  }

  function cleanErrors({ name, email, message }) {
    const cleared = {}
    if (name) cleared.showNameRequired = '';
    if (email) cleared.showEmailRequired = '';
    if (validateEmail(email)) cleared.showEmailMustBeValid = '';
    if (message) cleared.showMessageRequired = '';

    setErr({ ...err, ...cleared });
  }

  const validations = {
    email(value) {
      setErr({
        ...err,
        showEmailRequired: value ? '':'show',
        showEmailMustBeValid: value && !validateEmail(value) ? 'show':'',
      });
    },
    name(value) {
      setErr({ ...err, showNameRequired: value ? '':'show' });
    },
    message(value) {
      setErr({ ...err, showMessageRequired: value ? '':'show' });
    },
  };

  function modifyInput(e) {
    const { name, value } = e.target;
    const newVals = { ...formState, [name]: value };
    cleanErrors(newVals);
    setFormState(newVals);
    setSubmitDisabled(formNotReady(newVals));
  }

  const inputEvents = {
    onBlur(e) {
      const { name: target, value } = e.target;

      const action = validations[target];
      action(value);

      setSubmitDisabled(formNotReady({ name, email, message }))
    },
    onChange: modifyInput,
    onInput: modifyInput,
  }

  function handleSubmit(e) {
    e.preventDefault();
    contactUs(formState)
      .then(() => setMessageSent('show'))
      .then(() => pause(5000))
      .then(() => setMessageSent(''));
  }

  return (
    <div className="container">
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={ handleSubmit }>
        <div className="name">
          <input type="text" name="name" placeholder="Name" defaultValue={ name } { ...inputEvents }/>
          <div className={ `error ${ err.showNameRequired }` }>Please enter a name.</div>
        </div>
        <div className="email">
          <input type="email" name="email" placeholder="E-mail" defaultValue={ email } { ...inputEvents }/>
          <div className={ `error ${ err.showEmailRequired }` }>Please enter an email.</div>
          <div className={ `error ${ err.showEmailMustBeValid }` }>Please enter a valid email address.</div>
        </div>
        <div className="message">
          <textarea name="message" placeholder="Message" rows="5" defaultValue={ message } { ...inputEvents }/>
          <div className={ `error ${ err.showMessageRequired }` }>Please include a message.</div>
        </div>
        <div className={ `message-sent ${ messageSent }` }>Message was sent successfully.</div>
        <button disabled={ submitDisabled } type="submit">Submit</button>
      </form>
    </div>
  )
}
