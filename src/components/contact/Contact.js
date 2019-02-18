import React, { Component } from 'react'

import './Contact.css';
import PageHeader from '../PageHeader';
import spinner from '../../images/spinner.svg';

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

  onSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.formData);
    this.setState({ loading: true, formFailure: false, formSuccess: false });

    return fetch(process.env.GATSBY_AWS_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(this.state.formData)
    })
    .then(response => {
      console.log(response);
      this.setState({
        formData: initial_formData, 
        formSuccess: true,
        loading: false
      });
    })
    .catch(err => {
      console.log(err);
      this.setState({
        formData: initial_formData, 
        formFailure: true,
        loading: false
      });
    });
  }

  render() {
    const { name, email, message } = this.state.formData;
    const { formSuccess, formFailure, loading } = this.state;
    const { localeData } = this.props;

    return (
      <div>
        <PageHeader title={`${localeData.headerText}`} classes="contactHeader" />
        <div className="contact">
          <p>{localeData.content}</p>
          <form className="contactForm">
            <div className="contactFormInputBlock">
              <label htmlFor="name">{localeData.name}</label>
              <input
                onChange={this.onUpdateState}
                value={name}
                type="text"
                name="name"
                id="name"
              />
            </div>

            <div className="contactFormInputBlock">
              <label htmlFor="email">{localeData.email}</label>
              <input
                onChange={this.onUpdateState}
                value={email}
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="contactFormInputBlock">
              <label htmlFor="message">{localeData.message}</label>
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
              <span style={{ margin: '0 1rem' }}>{localeData.buttonText}</span>
              {loading && (
                <img
                  src={spinner}
                  className="loader"
                  width="22px"
                  height="22px"
                  alt=""
                />
              )}
            </button>

            <div className="formStatus">
              {formSuccess && <span className="formSuccess">Success!</span>}
              {formFailure && <span className="formFailure">Form Not Sent!</span>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;

