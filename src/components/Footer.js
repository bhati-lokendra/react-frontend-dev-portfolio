import React, { Component } from "react";

class Footer extends Component {
  render() {
    const socialNetworks = [
      {
        name: "github",
        url: "https://github.com/lokendrasingh",
        class: "fab fa-github"
      },
      {
        name: "instagram", 
        url: "https://www.instagram.com/lokendrasingh",
        class: "fab fa-instagram"
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/lokendra-singh7014153967/",
        class: "fab fa-linkedin"
      },
      {
        name: "email",
        url: "mailto:lokendrasinghb11@gmail.com",
        class: "fas fa-envelope"
      }
    ];

    const networks = socialNetworks.map(function (network) {
      return (
        <span key={network.name} className="m-4">
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.class}></i>
          </a>
        </span>
      );
    });

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy; Lokendra Singh
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;