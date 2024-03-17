import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact">
      <h1 className="sectiontitle">Contact</h1>
      <span>Let's connect!</span>
      <span>Currently accepting new clients, project collaborations, & job opportunity inquiries.</span>
      <div className="contactform-container">
        <form method="post" name="contact" netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="fname">First Name</label>
          <input type="text" autoComplete="given-name" id="fname" name="*Firstname" placeholder="First Name" />
          <label htmlFor="lname">Last Name</label>
          <input type="text" autoComplete="family-name" id="lname" name="Lastname" placeholder="Last Name" />
          <label htmlFor="email">Email</label>
          <input type="text" autoComplete="email" id="email" name="Email" placeholder="*Email" />
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="*Subject" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message..."></textarea>
          <input className="submitbutton" type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

