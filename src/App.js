
import './App.css';
import Container from './Container.js';
import React, { useState} from 'react';

class Citate {
  constructor(name, quote) {
      this.name = name;
      this.quote = quote;
  }
}

function App() {
  const quotes = [
    new Citate("Anais Nin","Life shrinks or expands in proportion to one’s courage"),
    new Citate("Grandma Moses", "Life is what we make it, always has been, always will be"),
    new Citate("Chinese Proverb", "The person who says it cannot be done should not interrupt the person who is doing it"),
    new Citate("Charles Swindoll","Life is 10% what happens to me and 90% of how I react to it"),
    new Citate("Farrah Gray","Build your own dreams, or someone else will hire you to build theirs"),
    new Citate("Plato", "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light"),
    new Citate("Benjamin Franklin","I didn’t fail the test. I just found 100 ways to do it wrong"),
    new Citate("Ann Landers", "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings")
]

const colors = {0: "rgb(38, 51, 71)", 1: "rgb(38, 119, 137)", 2: "rgb(206, 119, 25)",
 3: 'rgb(206, 119, 160)', 4: "rgb(206, 236, 160)",
  5: "rgb(66, 149, 7)", 6: "rgb(0,0,0)", 7: "rgb(66, 25, 63)"}


const [currentIndex, setIndex] = useState(Math.floor(Math.random() * quotes.length));
const [currentBackground, setBackground] = useState({newColor: colors[Math.floor(Math.random() * quotes.length)], oldColor: colors[Math.floor(Math.random() * quotes.length)]})
const [oldIndex, setOldIndex] = useState(null);
const [check, setCheck] = useState(false);


const changeCitate = () => {
  setOldIndex(currentIndex);

  do {
    var randomValue = Math.floor(Math.random() * quotes.length)
  } while (randomValue === currentIndex)
  setCheck(true);

  setIndex(randomValue)
  setBackground(prevObj => {
    return {oldColor: prevObj.newColor, newColor: colors[currentIndex]}
  })
}

const cssProperties = {
  "--var-background-color-old" : currentBackground.oldColor,
  "--var-background-color" : currentBackground.newColor
}
  //console.log("currentIndex: "+ currentIndex + " old background: " + cssProperties['--var-background-color-old'] + "new background: " + cssProperties['--var-background-color'])

  return (
    <div key={Math.random()} className="App" style={cssProperties}>
      <Container currentIndex={currentIndex} quotes={quotes} changeCitate={changeCitate} currentBackground={currentBackground} oldIndex={oldIndex} check={check} />
    </div>
  );
}

export default App;
