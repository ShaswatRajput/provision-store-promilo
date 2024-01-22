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
            <img src="../../../public/folderstruc.png" />
          </li>
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
              <li>Change Directory:<code> cd ./frontend</code></li>
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
                <i>What were the problems that you faced during this project ?</i>
              </b>
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque
            voluptatum repellat. Et, ad in. Repellat quaerat consectetur libero
            quas sapiente repellendus autem aut veniam voluptatum vel doloremque
            architecto corporis quam, odit pariatur. Nihil hic veniam expedita
            fuga sint? Modi odio reprehenderit deleniti ex autem enim sit
            dignissimos omnis, tempore quo ipsa ipsum numquam est, maiores
            incidunt. Est commodi voluptatem laborum doloremque nobis maxime
            quam quis corporis maiores ducimus debitis soluta tenetur ipsam sed
            quibusdam, possimus minus, quasi totam animi. Deserunt in quia
            doloribus quasi nulla voluptatibus officiis, magni sequi facere
            ducimus, saepe dolores provident iure vero ullam natus modi.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
