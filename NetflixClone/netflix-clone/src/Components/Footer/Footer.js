import React from "react";
import "./Footer.css";
// import Logo from "./Logo.png"
import dev from "./icons/dev.png";
import linkedin from "./icons/linkedin.png";
import github from "./icons/github.png";
import Logo from "./icons/Logo.png";

function Footer() {
  return (
    <footer>
      <ul className="footerwords">
        <li>
          <a
            className="App-link"
            href="https://solinyc.square.site/product/donation/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Logo} className="solinyc" alt="Soli.nyc" />
          </a>
          © 2022{" "}
        </li>{" "}
        </ul>
        <ul className="footericons">
        <li>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/solinyc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} className="social-footer" alt="linkedin" />
          </a>
          <a
            className="App-link"
            href="https://www.github.com/solinyc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="social-footer" alt="github" />
          </a>
          <a
            className="App-link"
            href="https://dev.to/solinyc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dev} className="social-footer" alt="dev" />
          </a>{" "}
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
