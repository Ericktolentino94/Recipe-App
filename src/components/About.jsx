
import "./About.css";

import { Link } from "react-router-dom";

import Alex from "../assets/AlexImg.jpeg";
import Erick from "../assets/ErickImg.png";
import James from "../assets/JamesImg.jpeg";


export default function About() {
  return (
    <>
      <div className="aboutContainer">
        <h1 classname="aboutTitle1">Our Team</h1>
        <section className="description">
          <h2 className="descriptionTitle">Description of our Project</h2>
          <p className="trueDescription" >
            In this project our team created a Recipe App that allows a user
            to search for recipes based on ingredients that they already have so they can save money and limit waste. 
            A user can select images of meals and be taken to a page of that dish with more information on that recipe.
            This project also has some other great unique features and is a collaborative effort that includes
            three classmates using our knowledge of design and React.
          </p>
        </section>
        <ul className="team-Cards">
          <div classname="display">
            <li className="team-card-et">
              <h3 classname="memberName">Erick Tolentino</h3>
              <img className="ePic" src={Erick} alt="Erick" height="250px" />
              <button className="btn">
                <Link className="link" to={"https://github.com/ErickTolentino94"}>
                  GitHub
                </Link>
              </button>
              <p className="summary">
                Erick Tolentino has studied Computer Science, Finance and
                is also a Full Stack Developer
              </p>
            </li>
            <li className="team-card-at">
              <h3 classname="memberName">Alexander Tsiklidis</h3>
              <img src={Alex} alt="Alex" height="250px" />
              <button className="btn">
                <Link className="link" to={"https://github.com/AlexanderTsiklidis1" }>GitHub</Link>
              </button>
              <p className="summary">
                Alexander Tsiklidis is a Software developer with an interest in
                improving world infrastructure.
              </p>
            </li>
            <li className="team-card-je">
              <h3 classname="memberName">James Edmond</h3>
              <img src={James} alt="James" height="250px" />
              <button className="btn">
                <Link className="link" to="https://github.com/Jed161">GitHub</Link>
              </button>
              <p className="summary">
                James Edmond is a Software Engineer Fellow at the Pursuit
                Fellowship! When James is not programming, he likes to enjoy a good movie or two!
              </p>
            </li>
          </div>
        </ul>
      </div>
    </>
  );

  }
