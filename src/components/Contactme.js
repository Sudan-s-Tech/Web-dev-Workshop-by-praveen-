import React from "react";

const Contactme = () => {
  return (
    <tr id="ContactMe">
      <td>
        <div className="author_content">
          <h1 className="title">Love to hear form you</h1>
          <p>
            I always love to hear from you. You guys can reach me through my
            email address as a primary option or through filling the contact
            form.
          </p>
        </div>
        <footer>© If copyrighted here</footer>
      </td>
      <td>
        <section className="contact">
          <form id="contactform">
            <label htmlFor="name">Full name*</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              maxLength="50"
              required=""
            />
            <label htmlFor="name">Email address*</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              maxLength="100"
              required=""
            />
            <label htmlFor="message">Message*</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message here..."
              maxLength="250"
              required=""
            ></textarea>
          </form>
          <button type="submit">SUBMIT</button>
        </section>
      </td>
    </tr>
  );
};

export default Contactme;
