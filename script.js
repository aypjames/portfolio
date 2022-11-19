const greetings = ["G'day!", "Ahoy!", "Hello!", "Hiya!"];

function randGreeting() {
  // gets a random whole number between 0 and the length of the greetings array
  const randNum = Math.floor(Math.random() * greetings.length);
  return greetings[randNum];
}

document.getElementById("pageGreeting").innerHTML = `${randGreeting()} 👋`;
