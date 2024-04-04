const displayCalculation = document.querySelector<HTMLHeadingElement>(".displayNumber--heading");
const body = document.querySelector("body");
const switchButtonInput = document.querySelector<HTMLInputElement>(".displaySwitch--switchInput");
const pressNumber = document.querySelectorAll<HTMLButtonElement>(".userOptions-row--number");
const clearButton = document.querySelector<HTMLButtonElement>(".userOptions-row--clear");
const dotButton = document.querySelector<HTMLButtonElement>(".userOptions-row--dot");
const postiveNegativeButton = document.querySelector(".userOptions-row--pos-neg");
const pressOperator = document.querySelectorAll<HTMLButtonElement>(".userOptions-row--operator");

let numberArray : number[] = [];

const storeOperator : string[] = [];

if(!displayCalculation || !pressNumber || !clearButton || !dotButton || !postiveNegativeButton || !pressOperator || !switchButtonInput) { //This checks if the query selectors are working, if not then a message will pop up
  throw new Error("Issue with selector!");
}

let clearDisplay = () => { // clear Function to clear the calculator back to 0

  displayCalculation.innerText = "0";

  dotButton.disabled = false;

  pressOperator.forEach((chooseOperator) => {

      chooseOperator.disabled = false;

  });

  numberArray.length = 0;
  console.log("This has been clicked!", displayCalculation); 
}

const numberDisplay = (event: Event) => { //number Display function adds the number to main heading so that it can be seen
  
  const getNumber = event.target as HTMLButtonElement;
  
  if(displayCalculation.innerText === "0") {
    displayCalculation.innerText = "";
  }

    if(displayCalculation.innerText.length < 15) { //Checks the length of the innertext if it is below 15 then run
      displayCalculation.innerText += getNumber.value;
  
    } else {
      
      alert("ERROR!"); //This gives an ERROR when the length is above 15
      displayCalculation.style.fontSize = 30 + "px";
      displayCalculation.innerText = "0";
      
    }
}

const chosenOperator = (event: Event) => { //This gets the chosen operator and sees which of teh cases are working

  const getOperator = event.target as HTMLButtonElement;

  if(getOperator.value === "+") {

    addNumbers();
    console.log("add has been run");
    
  } else if(getOperator.value === "-") {

    subtractNumbers();
    console.log("The - sign has been added");

  } else if(getOperator.value === "x") {

    multiplyNumbers();
    console.log("The * sign has been added");

  } else if(getOperator.value === "÷") {

    divideNumbers();
    console.log("The / sign has been added");

  } else if(getOperator.value === "%") {

    percentageNumbers();
    console.log("The % sign has been added");

  } else if(getOperator.value === "=") {

    equalTotal();

  }  else {
    console.log("No operator has been selected!");
    
  }
}

const addDotFunction = (event: Event) => {

  const getDot = event.target as HTMLButtonElement;

  console.log(numberArray.length);
  

  if(numberArray.length < 3) {
      
    displayCalculation.innerText += getDot.value;

    getDot.disabled = true;

    console.log("poinnt added in if");

  }
}

const positiveNegativeFunction = () => {

  if(parseInt(displayCalculation.innerText) > 0) {
    displayCalculation.innerText = "-" + displayCalculation.innerText;
  } 
  else {
    displayCalculation.innerText = displayCalculation.innerText.replace("-", "");
  }

}


const addNumbers = () => { //This is the add function
  
  let total : number = 0;
  dotButton.disabled = false;

    if(numberArray.length < 1) {
      
      pressOperator.forEach((chooseOperator) => { //This checks the operators and then disbales them accordingly

        if(chooseOperator.value == "%" || chooseOperator.value == "÷" || chooseOperator.value == "x" || chooseOperator.value == "-") {
          chooseOperator.disabled = true;
        }
    
      });

      numberArray.push(Number(displayCalculation.innerText)); //This pushes add the end of the array
  
      displayCalculation.innerText = displayCalculation.innerText + "+";
  
      let splitOperator1 = displayCalculation.innerText.split("+"); //This splits whatever is inside the display and create an array 
      numberArray.push(Number(splitOperator1[1])); //This pushes add the end of the array from the other array
  
      console.log(`number Array length ${numberArray.length}`);
      console.log(`number Array ${numberArray}`);
      console.log(`split operator Array ${splitOperator1}`);
      console.log("IF IS FIRING");
  
    } else {
  
      let splitOperator2 = displayCalculation.innerText.split("+"); //This splits whatever is inside the display and create an array 
      numberArray[1] = (Number(splitOperator2[1]));; //This pushes add the end of the array from the other array
  
      total = numberArray[0] + numberArray[1]; //This figures out the total
      total = Number(total.toFixed(2)); //This rounds the total to the nearest 2 decimal place

      numberArray[0] = total;
  
      displayCalculation.innerText = total.toString();
      displayCalculation.innerText = displayCalculation.innerText + "+";

      console.log(`number Array ${numberArray}`);
      console.log(`split operator Array ${splitOperator2}`);
      console.log("total is = " + total);
      console.log("ELSE IS FIRING");
    
    }
}

const subtractNumbers = () => {

  let total : number = 0;
  dotButton.disabled = false;
  
  if(numberArray.length < 1) {
   
    pressOperator.forEach((chooseOperator) => {

      if(chooseOperator.value == "%" || chooseOperator.value == "÷" || chooseOperator.value == "x" || chooseOperator.value == "+") {
        chooseOperator.disabled = true;
      }
  
    });

    numberArray.push(Number(displayCalculation.innerText));

    displayCalculation.innerText = displayCalculation.innerText + "-";

    let splitOperator1 = displayCalculation.innerText.split("-");
    numberArray.push(Number(splitOperator1[1]));

    numberArray[1] = 0;
    splitOperator1[1] = String(0);

    console.log(`number Array length ${numberArray.length}`);
    console.log(`number Array ${numberArray}`);
    console.log(`split operator Array ${splitOperator1}`);
    console.log("IF IS FIRING");

  } else {

    let splitOperator2 = displayCalculation.innerText.split("-");

    if(splitOperator2.length > 2) {
      splitOperator2.shift();
    } 

    numberArray[1] = (Number(splitOperator2[1]));

    total = numberArray[0] - numberArray[1];
    total = Number(total.toFixed(2));

    numberArray[0] = total;

    displayCalculation.innerText = total.toString();
    displayCalculation.innerText = displayCalculation.innerText + "-";

    console.log(`number Array ${numberArray}`);
    console.log(`split operator Array ${splitOperator2}`);
    console.log("total is = " + total);
    console.log("ELSE IS FIRING");
  
  }
}

const multiplyNumbers = () => {

  let total : number = 0;
  dotButton.disabled = false;

  pressOperator.forEach((chooseOperator) => {

    if(chooseOperator.value == "%" || chooseOperator.value == "÷" || chooseOperator.value == "+" || chooseOperator.value == "-") {
      chooseOperator.disabled = true;
    }

  });

  if(numberArray.length < 1) {

    numberArray.push(Number(displayCalculation.innerText));
    displayCalculation.innerText = displayCalculation.innerText + "x";

    let splitOperator1 = displayCalculation.innerText.split("x");
    numberArray.push(Number(splitOperator1[1]));

    console.log(`number Array length ${numberArray.length}`);
    console.log(`number Array ${numberArray}`);
    console.log(`split operator Array ${splitOperator1}`);
    console.log("IF IS FIRING");

  } else {

    let splitOperator2 = displayCalculation.innerText.split("x");    
    numberArray[1] = (Number(splitOperator2[1]));

    total = numberArray[0] * numberArray[1];
    total = Number(total.toFixed(2));

    numberArray[0] = total;

    displayCalculation.innerText = total.toString();
    displayCalculation.innerText = displayCalculation.innerText + "x";

    console.log(`number Array ${numberArray}`);
    console.log(`split operator Array ${splitOperator2}`);
    console.log("total is = " + total);
    console.log("ELSE IS FIRING");
  
  }
}

const divideNumbers = () => {
  
  let total : number = 0;
  dotButton.disabled = false;

  pressOperator.forEach((chooseOperator) => {

    if(chooseOperator.value == "%" || chooseOperator.value == "+" || chooseOperator.value == "x" || chooseOperator.value == "-") {
      chooseOperator.disabled = true;
    }

  });

  if(numberArray.length < 1) {
   
    numberArray.push(Number(displayCalculation.innerText));
    displayCalculation.innerText = displayCalculation.innerText + "÷";

    let splitOperator1 = displayCalculation.innerText.split("÷");
    numberArray.push(Number(splitOperator1[1]));

    console.log(`number Array length ${numberArray.length}`);
    console.log(`number Array ${numberArray}`);
    console.log(`split operator Array ${splitOperator1}`);
    console.log("IF IS FIRING");

  } else {

    let splitOperator2 = displayCalculation.innerText.split("÷");
    numberArray[1] = (Number(splitOperator2[1]));;

    total = numberArray[0] / numberArray[1];
    total = Number(total.toFixed(2));
    numberArray[0] = total;

    displayCalculation.innerText = total.toString();
    displayCalculation.innerText = displayCalculation.innerText + "÷";

    console.log(`number Array ${numberArray}`);
    console.log(`split operator Array ${splitOperator2}`);
    console.log("total is = " + total);
    console.log("ELSE IS FIRING");
  }
}

const equalTotal = () => {

  let sum : number = 0;
  let operators = "";

  for(let i = 0; i < storeOperator.length; i++) {

    if(displayCalculation.innerText.includes(storeOperator[i])) {

        operators = storeOperator[i];
        console.log(operators);
    }
  }

  console.log(operators);

  if(displayCalculation.innerText.endsWith("%")) {

    console.log("percentage total is expected");

    let percentageSplit = displayCalculation.innerText.split("%");  
    sum = Number(percentageSplit[0]) / 100;

    displayCalculation.innerText = sum.toString();
    numberArray.length = 0;

  } else if(displayCalculation.innerText.endsWith(operators)) {
  
    alert("CANNOT DO CALCULATION!");
    displayCalculation.innerText = "0";
    numberArray.length = 0;

  } else {
    
    switch(operators) {
      case "x":
          let multiplySplit = displayCalculation.innerText.split("x");
          sum = Number(multiplySplit[0]) * Number(multiplySplit[1]);
          sum = Number(sum.toFixed(2));
      
          displayCalculation.innerText = sum.toString();
          console.log(sum);
      
          numberArray.length = 0;
          break;
      
      case "+":  
        let addSplit = displayCalculation.innerText.split("+");
        sum = Number(addSplit[0]) + Number(addSplit[1]);
      
        sum = Number(sum.toFixed(2));
  
        displayCalculation.innerText = sum.toString();
        console.log(sum);
  
        numberArray.length = 0;
        break;
          
      case "÷":  
        let divideSplit = displayCalculation.innerText.split("÷");
        sum = Number(divideSplit[0]) / Number(divideSplit[1]);
  
        sum = Number(sum.toFixed(2));
  
        displayCalculation.innerText = sum.toString();
        console.log(sum);
  
        numberArray.length = 0;
        break;
  
      case "-":        
        subtractNumbers();
        if(displayCalculation.innerText.endsWith("-")) {
          displayCalculation.innerText = displayCalculation.innerText.substring(0,displayCalculation.innerText.length - 1);
        }
  
        numberArray.length = 0;
        break;
  
      default: 
        console.log("nothing is expected");
        break;
    }

  }

  pressOperator.forEach((chooseOperator) => {

    chooseOperator.disabled = false;

  });
}

const percentageNumbers = () => { //This checks the percentage button to see if the percentage has been added or not
  
  if(!displayCalculation.innerText.endsWith("%")) {
    
    displayCalculation.innerText = displayCalculation.innerText + "%";
    
    pressOperator.forEach((chooseOperator) => {

      if(chooseOperator.value != "=") {
        chooseOperator.disabled = true;
        dotButton.disabled = true;
      }
      
    });

  } else { 

    alert("CANNOT ADD ANOTHER PERCENTAGE!");
    displayCalculation.innerText = "0";
  }
}

const switchChange = () => { //This is a onchange function where if the input type has been checked then do a specific command

  const displayouterHeading = document.querySelector(".displayNumber");
  const calculatorButtons = document.querySelector(".userOptions");
  const changeFont1 = document.querySelector(".offswitch");
  const changeFont2 = document.querySelector(".onswitch");

  if(switchButtonInput.checked) {
    body?.setAttribute("style", "width: 100vw; height: 100vh; background-size: cover; background-repeat:no-repeat; background-image: linear-gradient(to bottom, #99ccff, #8ad4f5, #8dd9e5, #9ddbd5, #b2dcc8);");
    displayouterHeading?.setAttribute("style", "display: block;");
    calculatorButtons?.setAttribute("style", "display: block;");
    changeFont1?.setAttribute("style", "color: black;");
    changeFont2?.setAttribute("style", "color: black;");

    console.log("IS WORKING");

  } else {
    body?.setAttribute("style", "background-color: black;");
    displayouterHeading?.setAttribute("style", "display: block; opacity: 0.1;");
    calculatorButtons?.setAttribute("style", "display: block; opacity: 0.1;");
    changeFont1?.setAttribute("style", "color: white;");
    changeFont2?.setAttribute("style", "color: white;");

    console.log("IS NOT WORKING");
  }
}

switchButtonInput.addEventListener("change", switchChange);
clearButton.addEventListener("click", clearDisplay); //clear function
dotButton?.addEventListener("click", addDotFunction);
postiveNegativeButton?.addEventListener("click", positiveNegativeFunction); //positive or negative function


pressNumber.forEach((popUpNumber) => { //Loop through the array of button numbers stored when clicked

  popUpNumber.addEventListener("click", numberDisplay);

});

pressOperator.forEach((popUpOperator) => { //Loop through the array of operator buttons stored when clicked

  popUpOperator.addEventListener("click", chosenOperator);
  storeOperator.push(popUpOperator.value)
  console.log(storeOperator);
  
});

const onPageLoad = () => { //This is a on load page function when the window loadsit does a specific command
  
  body?.setAttribute("style", "background-color: #99ccff;");
  setTimeout(showPage, 6500); //this determines the loading time which is 3 seconds
}

const showPage = () => { //This is a on show function where the window is loadded then shpow the page
  const loader = document.querySelector("#loadingSection");
  const display = document.querySelector(".displayNumber");
  const display2 = document.querySelector(".userOptions");
  const display3 = document.querySelector(".displaySwitch");
  const showDisplay = document.querySelector(".calculator-body");
  
  body?.setAttribute("style", "width: 100vw; height: 100vh; background-size: cover; background-repeat:no-repeat; background-image: linear-gradient(to bottom, #99ccff, #8ad4f5, #8dd9e5, #9ddbd5, #b2dcc8);");
  loader?.setAttribute("style", "display: none;");
  display?.setAttribute("style", "display: block;");
  display2?.setAttribute("style", "display: block;");
  display3?.setAttribute("style", "display: grid;");
  showDisplay?.setAttribute("style", "display: block;");

}

window.onload = () => { //When the window starts then it will run the page load function
  
  onPageLoad();
 
}