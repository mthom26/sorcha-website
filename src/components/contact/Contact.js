import React, { Component } from 'react'

import './Contact.css';
import PageHeader from '../PageHeader';

const initial_formData = {
  name: '',
  email: '',
  message: ''
};

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: initial_formData,
      formSuccess: false,
      formFailure: false,
      loading: false
    };
  }

  onUpdateState = (event) => {
    const { target } = event;
    this.setState({
      formData: {
        ...this.state.formData,
        [target.name]: target.value
      }
    });
  }
  /*
  onSubmit = () => {
    this.setState({ loading: true });
    return fetch(process.env.GATSBY_AWS_CONTACTFORM, {
      method: "POST",
      body: JSON.stringify(this.state.formData)
    })
      .then(response => {
        console.log(response);
        this.setState({
          ...INITIAL_STATE, 
          formSuccess: true,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          ...INITIAL_STATE,
          formFailure: true,
          loading: false
        });
      });
  }
  */

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.formData);
    this.setState({ loading: true });
  }

  render() {
    const { name, email, message } = this.state.formData;
    const { formSuccess, formFailure, loading } = this.state;

    return (
      <div>
        <PageHeader title="Contact" classes="contactHeader" />
        <div className="contact">
          <form className="contactForm">
            <div className="contactFormInputBlock">
              <label htmlFor="name">Name</label>
              <input
                onChange={this.onUpdateState}
                value={name}
                type="text"
                name="name"
                id="name"
              />
            </div>

            <div className="contactFormInputBlock">
              <label htmlFor="email">Email</label>
              <input
                onChange={this.onUpdateState}
                value={email}
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="contactFormInputBlock">
              <label htmlFor="message">Message</label>
              <textarea
                onChange={this.onUpdateState}
                rows={4}
                value={message}
                name="message"
                id="message"
              />
            </div>

            <button
              onClick={this.onSubmit}
              className="contactFormButton"
            >
              <span style={{ margin: '0 1rem' }}>Send Message</span>
              {loading && <span className="loader">Loader</span>}
            </button>

            <div className="formStatus">
              {formSuccess && <span>Success</span>}
              {formFailure && <span>Form Not Sent!</span>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;

