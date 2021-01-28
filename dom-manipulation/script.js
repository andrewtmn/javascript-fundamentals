let body = document.querySelector('body');

const redText = document.createElement('p');
const blueText = document.createElement('h3');

redText.textContent = "Hey I'm red!";
redText.style.color = "red";
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";

body.appendChild(redText);
body.appendChild(blueText);

const pinkDiv = document.createElement('div');
pinkDiv.style["background-color"] = "pink";

const pinkDivHeader = document.createElement('h1');
const pinkDivPara = document.createElement('p');
pinkDivHeader.textContent = "I'm in a div";
pinkDivPara.textContent = "ME TOO!";

pinkDiv.appendChild(pinkDivHeader);
pinkDiv.appendChild(pinkDivPara);

body.appendChild(pinkDiv);


