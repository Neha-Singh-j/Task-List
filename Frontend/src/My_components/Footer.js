import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#0d0d0d",
    color: "#ffffff",
    padding: "40px 20px",
    marginTop: "40px"
  };

  const sectionStyle = {
    flex: "1",
    padding: "0 20px"
  };

  const headingStyle = {
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "18px"
  };

  const linkStyle = {
    color: "#cccccc",
    textDecoration: "none",
    display: "block",
    margin: "6px 0"
  };

  return (
    <footer style={footerStyle}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <div style={sectionStyle}>
          <div style={headingStyle}>Company</div>
          <a href="#" style={linkStyle}>About Us</a>
          <a href="#" style={linkStyle}>Our Team</a>
          <a href="#" style={linkStyle}>Research</a>
          <a href="#" style={linkStyle}>Events</a>
        </div>
        <div style={sectionStyle}>
          <div style={headingStyle}>Support</div>
          <a href="#" style={linkStyle}>Contact Us</a>
          <a href="#" style={linkStyle}>FAQ</a>
          <a href="#" style={linkStyle}>Community</a>
          <a href="#" style={linkStyle}>Tutorials</a>
        </div>
        <div style={sectionStyle}>
          <div style={headingStyle}>Resources</div>
          <a href="#" style={linkStyle}>Documentation</a>
          <a href="#" style={linkStyle}>Blog</a>
          <a href="#" style={linkStyle}>Case Studies</a>
          <a href="#" style={linkStyle}>Whitepapers</a>
        </div>
        <div style={sectionStyle}>
          <div style={headingStyle}>Legal</div>
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>Terms of Service</a>
          <a href="#" style={linkStyle}>Cookie Policy</a>
        </div>
      </div>
      <p className="text-center mt-4" style={{ marginTop: "30px", fontSize: "14px", color: "#888" }}>
        &copy; {new Date().getFullYear()} MyTodosList.com. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
