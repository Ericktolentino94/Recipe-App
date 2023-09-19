
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
            In this project our team created a YouTube clone that allows a user
            to search for videos using the YouTube API. A user can select videos
            and watch them. This project is a collaborative effort that includes
            three claamates using our knowledge of design and React.
          </p>
        </section>
        <ul className="team-Cards">
          <div display>
            <li className="team-card-et">
              <h3 classname="memberName">Erick Tolentino</h3>
              <img className="ePic" src={Erick} alt="Erick" height="250px" />
              <button className="etbtn">
                <Link className="link" to={"https://github.com/ErickTolentino94"}>
                  GitHub
                </Link>
              </button>
              <p>
                Erick Tolentino has studied Computer Science, Digital Marketing and
                is also a Full Stack Developer
              </p>
            </li>
            <li className="team-card-at">
              <h3 classname="memberName">Alexander Tsiklidis</h3>
              <img src={Alex} alt="Alex" height="250px" />
              <button className="atbtn">
                <Link to={"https://github.com/AlexanderTsiklidis1" }>GitHub</Link>
              </button>
              <p>
                Alexander Tsiklidis is a Software developer with an interest in
                improving world infrastructure.
              </p>
            </li>
            <li className="team-card-je">
              <h3 classname="memberName">James Edmond</h3>
              <img src={James} alt="James" height="250px" />
              <button className="jebtn">
                <Link to="https://github.com/Jed161">GitHub</Link>
              </button>
              <p>
                James Edmond is a Software Engineer Fellow at the Pursuit
                Fellowship! When James is not programming, he likes to enjoy a good movie or two!
              </p>
            </li>
          </div>
        </ul>
      </div>
    </>
  );


