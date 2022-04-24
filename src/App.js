import React, { useState } from "react";
import "./styles.css";
import Card from "./Card";

export default function App() {
  const [name, setName] = useState("Your Name");
  const [job, setJob] = useState("Job Title");
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
  );

  return (
    <div className="App">
      <Card name={"IPhone"} job={"Apple:"} about={about} />
    </div>
  );
}
