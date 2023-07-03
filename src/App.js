import Greet from "./Greet";
import "./App.css";
import { useState } from "react";
import SuperWoman from "./images/superwoman.jpg";
import Unicorn from "./images/unicorn.webp";
import WonderWoman from "./images/wonder-woman.jpg";

function App() {
  const [selectedHero, setSelectedHero] = useState(null);
  const persons = [
    {
      name: "Fulya",
      heroName: "Superwoman",
      img: SuperWoman,
    },
    {
      name: "Zeynep",
      heroName: "Wonder Women",
      img: WonderWoman,
    },
    {
      name: "Begüm",
      heroName: "Unicorn",
      img: Unicorn,
    },
  ];

  return (
    <div className="App">
      {persons.map((person) => (
        <Greet
          selectedHero={selectedHero}
          handleClick={setSelectedHero}
          name={person.name}
          img={person.img}
          heroName={person.heroName}
        />
      ))}
    </div>
  );
}

export default App;
