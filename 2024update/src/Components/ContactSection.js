import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact">
      <h1 className="sectiontitle">Contact</h1>
      <span>let's connect!</span>
      <span>Currently accepting new clients, project collaborations, & job opportunity inquiries.</span>
      <section className="contactform">
        <form method="post" name="contact" netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label >Name</label>
          <input type="text" id="fname" name="*Firstname & Lastname" placeholder="First & Last Name" />
          <label for ="email">Email</label>
          <input type="text" id="email" name="Email" placeholder="*Email" />
          <label >Subject</label>
          <input type="text" id="subject" name="subject" placeholder="*Subject" />
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message..."></textarea>
          <input className="submitbutton" type="submit" value="submit" />
        </form>
        <input type="hidden" name="form-name" value="contact" />
      </section>
    </section>
  );
};

export default ContactSection;


