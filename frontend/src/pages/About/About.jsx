// import React from 'react'

// const About = () => {
//   return (
//     <>
//     <div>This is about page</div>

//     </>
//   )
// }

// export default About
import React from "react";
import "./About.css"; // Ensure you import the CSS file here

const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-cryptoscope">
          <h1>About Crypto Scope</h1>
          <p>
            Welcome to Crypto Scope, your trusted source for the latest
            cryptocurrency news, trends, and analysis. Our platform is dedicated
            to providing real-time insights into the world of crypto, helping
            you stay ahead in the rapidly evolving market.
          </p>
          <p>
            Whether you're a seasoned investor or just starting your crypto
            journey, Crypto Scope offers a range of resources to guide you. From
            detailed price tracking to expert market analysis, we aim to empower
            our users to make informed decisions and navigate the dynamic world
            of digital currencies.
          </p>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At Crypto Scope, our mission is to create a comprehensive and
            user-friendly platform that makes cryptocurrency accessible to
            everyone. We believe in fostering a well-informed community by
            delivering timely and accurate information that helps you make smart
            investment choices.
          </p>
        </div>
        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>Real-time cryptocurrency prices and charts</li>
            <li>In-depth market analysis and expert insights</li>
            <li>Portfolio tracking to monitor your investments</li>
            <li>News updates from the crypto world</li>
          </ul>
        </div>

        <div className="contact-info">
          <h2>Contact & Connect</h2>
          <p>
            Feel free to reach out or connect with me on my social profiles:
          </p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/nirvikar-kudalkar-918a48310/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin social-logo"></i> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Nirvikar3903"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github social-logo"></i> GitHub
              </a>
            </li>
            <li>
              {/* Email link wrapped with mailto */}
              <a
                href="mailto:your-nirvikar3903@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope social-logo"></i> Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
