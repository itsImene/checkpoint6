
const buttons = document.querySelectorAll('button');
const counter = document.querySelector('.counter');

const updateCounter = function (ev) {
  const button = ev.target;
  const previousValue = parseInt(counter.innerText);

  if (button.classList.contains('add')) {
    counter.innerText = `${previousValue + 1}`;
  }
   else if (button.classList.contains('reset')) {
    counter.innerText = '1';
  }

  const currentValue = parseInt(counter.innerText);
};



buttons.forEach((buttons) => {
  buttons.addEventListener('click', updateCounter);
});

// 2 éme carte compteur

const buttons1 = document.querySelectorAll('button');
const counter1 = document.querySelector('.counter1');

const updateCounter1 = function (ev) {
  const button = ev.target;
  const previousValue = parseInt(counter1.innerText);

  if (button.classList.contains('add1')) {
    counter1.innerText = `${previousValue + 1}`;
  }
   else if (button.classList.contains('reset1')) {
    counter1.innerText = '1';
  }

  const currentValue = parseInt(counter1.innerText);
};



buttons1.forEach((buttons1) => {
  buttons1.addEventListener('click', updateCounter1);
});

// 3éme carte 

const buttons2 = document.querySelectorAll('button');
const counter2 = document.querySelector('.counter2');

const updateCounter2 = function (ev) {
  const button = ev.target;
  const previousValue = parseInt(counter2.innerText);

  if (button.classList.contains('add2')) {
    counter2.innerText = `${previousValue + 1}`;
  }
   else if (button.classList.contains('reset2')) {
    counter2.innerText = '1';
  }

  const currentValue = parseInt(counter2.innerText);
};



buttons2.forEach((buttons2) => {
  buttons2.addEventListener('click', updateCounter2);
});

// 4 éme carte 


const buttons3 = document.querySelectorAll('button');
const counter3 = document.querySelector('.counter3');

const updateCounter3 = function (ev) {
  const button = ev.target;
  const previousValue = parseInt(counter3.innerText);

  if (button.classList.contains('add3')) {
    counter3.innerText = `${previousValue + 1}`;
  }
   else if (button.classList.contains('reset3')) {
    counter3.innerText = '1';
  }

  const currentValue = parseInt(counter3.innerText);
};



buttons3.forEach((buttons3) => {
  buttons3.addEventListener('click', updateCounter3);
});

// total panier



// fav


function c11() {
  document.getElementById("c1").style.color="red";

}


function c22() {
  document.getElementById("c2").style.color="red";
}
function c33() {
  document.getElementById("c3").style.color="red";
}

function c44() {
  document.getElementById("c4").style.color="red";
}



// suprimer.......................................ça marche pas 
function myFunction() {
  var x = document.getElementById("card1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function ca1 (){
  // var x1 = document.getElementById("card1");
  // if(x1.style.visibility === "visible");{
  //   x1.style.visibility==="hidden";
  // }

  doccument.getElementById("card1").style.display="block";
  
}