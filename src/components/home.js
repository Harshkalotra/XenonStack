import React from "react";
import phone1 from "../components/phone1.png";
import phone2 from "../components/phone2.jpeg";
import phone3 from "../components/phone3.png";
import phone4 from "../components/phone4.webp";
import phone5 from "../components/phone5.png";
//import "./Home.css"; // Import the CSS file

export default function Home() {
  return (
    <div>
       
      <ul className="navbar">
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
      </ul>
      <img src={phone1} alt="phone Image" width="100%" /><br></br>
      <img src={phone2} alt="phone Image" width="100%" /><br></br>
      <img src={phone3} alt="phone Image" width="100%" />
      <img src={phone4} alt="phone Image" width="100%" />
      <img src={phone5} alt="phone Image" width="100%" />
       
    </div>
 
 
  );
}