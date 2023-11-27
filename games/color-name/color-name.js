//Initial References
let draggableObjects;
let dropPoints;
const startButton = document.getElementById("start");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const dragContainer = document.querySelector(".draggable-colors");
const dropContainer = document.querySelector(".drop-points");
const data = [
  "vermelho",
  "azul",
  "amarelo",
  "verde",
  "laranja",
  "roxo",
  "rosa",
  "preto",
  "branco",
  "cinza"
];

let deviceType = "";
let initialX = 0,
  initialY = 0;
let currentElement = "";
let moveElement = false;

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

let count = 0;

const randomValueGenerator = () => {
  return data[Math.floor(Math.random() * data.length)];
};

const stopGame = () => {
  controls.classList.remove("hide");
  startButton.classList.remove("hide");
};


function dragOver(e) {
  e.preventDefault();
}

function dragStart(e) {
    if (isTouchDevice()) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
      //Start movement for touch
      moveElement = true;
      currentElement = e.target;
    } else {
      e.dataTransfer.setData("text", e.target.id);
    }
  }
  
const touchMove = (e) => {
  if (moveElement) {
    e.preventDefault();
    let newX = e.touches[0].clientX;
    let newY = e.touches[0].clientY;
    let currentSelectedElement = document.getElementById(e.target.id);
    currentSelectedElement.parentElement.style.top =
      currentSelectedElement.parentElement.offsetTop - (initialY - newY) + "px";
    currentSelectedElement.parentElement.style.left =
      currentSelectedElement.parentElement.offsetLeft -
      (initialX - newX) +
      "px";
    initialX = newX;
    initialY - newY;
  }
};

const drop = (e) => {
  e.preventDefault();
  if (isTouchDevice()) {
    moveElement = false;
    const currentDrop = document.querySelector(`div[data-id='${e.target.id}']`);
    const currentDropBound = currentDrop.getBoundingClientRect();
    if (
      initialX >= currentDropBound.left &&
      initialX <= currentDropBound.right &&
      initialY >= currentDropBound.top &&
      initialY <= currentDropBound.bottom
    ) {
      currentDrop.classList.add("correct-answer");
      currentElement.classList.add("hide");
      currentDrop.innerHTML = ``;
      currentDrop.insertAdjacentHTML(
        "afterbegin",
        `<img src= "${currentElement.id}.jpg">`
      );
      count += 1;
    }
  } else {
    //Access data
    const draggedElementData = e.dataTransfer.getData("text");
    //Get custom attribute value
    const droppableElementData = e.target.getAttribute("data-id");
    if (draggedElementData === droppableElementData) {
      const draggedElement = document.getElementById(draggedElementData);
      e.target.classList.add("correct-answer");
      draggedElement.classList.add("hide");
      draggedElement.setAttribute("draggable", "false");
      e.target.innerHTML = ``;
      e.target.insertAdjacentHTML(
        "afterbegin",
        `<img src="${draggedElementData}.jpg">`
      );
      count += 1;
    }
  }
  if (count == 5) {
    result.innerText = `Parabéns! Você acertou todas as cores 😀🎉`;
    stopGame();
  }
};

const creator = () => {
  dragContainer.innerHTML = "";
  dropContainer.innerHTML = "";
  let randomData = [];
  for (let i = 1; i <= 5; i++) {
    let randomValue = randomValueGenerator();
    if (!randomData.includes(randomValue)) {
      randomData.push(randomValue);
    } else {
      i -= 1;
    }
  }
  for (let i of randomData) {
    const flagDiv = document.createElement("div");
    flagDiv.classList.add("draggable-image");
    flagDiv.setAttribute("draggable", true);
    if (isTouchDevice()) {
      flagDiv.style.position = "absolute";
    }
    flagDiv.innerHTML = `<img src="${i}.jpg" id="${i}">`;
    dragContainer.appendChild(flagDiv);
  }
  randomData = randomData.sort(() => 0.5 - Math.random());
  for (let i of randomData) {
    const countryDiv = document.createElement("div");
    countryDiv.innerHTML = `<div class='colors' data-id='${i}'>
    ${i.charAt(0).toUpperCase() + i.slice(1).replace("-", " ")}
    </div>
    `;
    dropContainer.appendChild(countryDiv);
  }
};

startButton.addEventListener(
  "click",
  (startGame = async () => {
    currentElement = "";
    controls.classList.add("hide");
    startButton.classList.add("hide");
    await creator();
    count = 0;
    dropPoints = document.querySelectorAll(".colors");
    draggableObjects = document.querySelectorAll(".draggable-image");

    draggableObjects.forEach((element) => {
      element.addEventListener("dragstart", dragStart);
      element.addEventListener("touchstart", dragStart);
      element.addEventListener("touchend", drop);
      element.addEventListener("touchmove", touchMove);
    });
    
    dropPoints.forEach((element) => {
      element.addEventListener("dragover", dragOver);
      element.addEventListener("drop", drop);
    });
  })
);