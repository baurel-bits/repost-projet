let myInput = document.getElementById('password');
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
let lenght = document.getElementById('lenght');

myInput.onfocus = function () {
  document.getElementById('message').style.display = "block";
}

myInput.onblur = function () {
  document.getElementById('message').style.display = "none";
}

myInput.onkeyup = function () {
  let lowerCase = /[a-z]/g
  if (myInput.value.match(lowerCase)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid')
  } else {
    letter.classList.remove('valid');
    letter.classList.add('invalid')
  }

  let upercase = /[A-Z]/g
  if (myInput.value.match(upercase)) {
    capital.classList.remove('invalid');
  capital.classList.add('valid')
  } else {
  capital.classList.remove('valid');
  capital.classList.add('invalid')
  }

  let numbers = /[0-9]/g
  if (myInput.value.match(numbers)) {
    number.classList.remove('invalid');
  number.classList.add('valid')
  } else {
  number.classList.remove('valid');
  number.classList.add('invalid')
  }


  if (myInput.value.length >= 8) {
    lenght.classList.remove('invalid');
    lenght.classList.add('valid')
   } //else {
  //   lenght.classList.remove('valid');
  //   lenght.classList.add('invalid')
  // }
}
