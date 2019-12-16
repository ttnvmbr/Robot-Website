
  let myInput = document.getElementById("robnaam");
  let letter = document.getElementById("letter");
  let capital = document.getElementById("capital");
  let number = document.getElementById("number");
  let length = document.getElementById("length");
  
  // laat de message box zien als de user klikt op het ww veld
  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  
  // verbergt de message box als de user buiten het ww veld klikt
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  
  myInput.onkeyup = function() {
    // kleine letters
    let lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    // hoofdletters
    let upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // nummers
    let numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // lengte
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }

let elem = document.getElementById("robh");
myInput.addEventListener("change", () => { elem.innerText = myInput.value});

let rn = document.getElementById("robnav");
myInput.addEventListener("change", () => { rn.innerText = myInput.value});

//voorkomt dat form verzonden wordt
document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
});
