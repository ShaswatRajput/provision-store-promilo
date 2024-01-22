import React from "react";
import "../../styles/pages/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="text-container">
        <ul>
          <li>
            <b>
              <i>Folder Structure</i>
            </b>
            <br />
            
          </li>
          <img style={{width: "100%",height: "fit-content"}}src="../../folderstruc.png" />
          <li>
            <b>
              <i>Setup</i>
            </b>
            <hr />

            <p>To start the project, follow these steps:</p>
            <ol>
              <li>
                Clone the repository:{" "}
                <code>
                  git clone [
                  https://github.com/ShaswatRajput/provision-store-promilo ]
                </code>
              </li>
              <li>
                Change Directory:<code> cd ./frontend</code>
              </li>
              <li>
                Install dependencies: <code>npm install</code>
              </li>
              <li>
                Start the development server: <code>npm run dev</code>
              </li>
            </ol>
          </li>
          <li>
            <p>
              <b>
                <i>
                  What were the problems that you faced during this project ?
                </i>
              </b>
              <p>
                It was smooth sailing at first, but when I attempted to
                implement the login and logout features and update the UI in
                various components such as Navbar and ProductPage, I encountered
                an issue where the UI did not refresh without hitting the reload
                button. This behavior was expected, as React updates the UI only
                when props, state, or global state changes. Although this
                problem is common, I attempted a few force reload workarounds,
                like using window.location.reload(), to avoid resorting to
                global state stores. However, it turned out that the most
                optimized solution was indeed to use global state. Consequently,
                I swiftly created a global context to resolve the issue in the
                most efficient way.
              </p>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
