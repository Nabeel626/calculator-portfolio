const displayCalculation = document.querySelector<HTMLHeadElement>(".displayNumber--heading");
const pressNumber = document.querySelector<HTMLButtonElement>("button");

// const numbers: number[] = [0,1,2,3,4,5,6,7,8,9];


if(!displayCalculation || !pressNumber) {
  throw new Error("Issue with selector!");
}

const displayNumber = (event: Event) => {

  const showText = pressNumber.value;
  
  if(showText === "2") {
    displayCalculation.innerText = "Clicked";
  }

  console.log("button is clicked", showText);
  

}

pressNumber?.addEventListener("click", displayNumber);