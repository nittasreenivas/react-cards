import React from "react";
import "./Card.css";

export default function Card({ name, job, about }) {
  // const [name,setName] = useState('Your Name');
  // const [job,setJob] = useState('Job Title');
  // const [about,setAbout] = useState('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.');
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://i.pcmag.com/imagery/reviews/07GmIupznWhAzDQ3Z7li99a-1..v1632849626.jpg"
            alt=""
            height="100px"
            width="100px"
          />
        </div>
      </div>
      <div className="lower-container">
        <h3> {name} </h3>
        <h4> {job} </h4>
        <p> {about} </p>
        <button> Visit Profile </button>
      </div>
    </div>
  );
}
