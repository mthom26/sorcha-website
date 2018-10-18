import React, { Component } from 'react'

import './Contact.css';
import PageHeader from '../PageHeader';

export class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader title="Contact" classes="contactHeader" />
        <div className="contact">
          <h1>Contact Form</h1>
        </div>
      </div>
    )
  }
}

export default Contact;

