const times = [ 'In five minutes','Next week','In a year or two','In 2073','In two millennia'];
const causes = ['a massive meteorite will impact the planet','a mutated virus will run rampant amongst the world\'s population','an AI that becomes sentient','a climate tipping point','a breakdown of society','a supervolcano eruption','a military robot uprising','a nano-technology chain reaction','runaway global warming','an unforseen climate reversal will trigger an ice age and'];
const outcomes = ['thermal overload in the atmosphere','sterility of all males in the population','the world and everything in it to dissolve into grey goo','massive firestorms and runaway temperature increases','breakdown of the food chain and starvation of the population','zombie mutants to eat the population','the atmosphere to vaporise and the seas to boil away','loss of all food sources and societal breakdown'];

const generateMessage = function () {
  const randPhrase = (phrases) => {
    return phrases[Math.floor(Math.random()*phrases.length)]
  }
  return `${randPhrase(times)}, ${randPhrase(causes)} will cause ${randPhrase(outcomes)}`;
}

const clickHandler = function () {
  let outputDiv = document.getElementById('message-output');
  outputDiv.style.visibility = "visible";
  outputDiv.innerHTML=`<p>${generateMessage()}</p>`;
  let buttonText = document.querySelector('button');
  buttonText.innerHTML="... or try your luck with another parallel universe?";
}

console.log(generateMessage()); 