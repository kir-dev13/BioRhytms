"use stricts";

document.addEventListener("DOMContentLoaded", function(){
  let authBlock = document.querySelector('.content__block__auth')  
  if (window.getComputedStyle(authBlock).getPropertyValue('display') == 'block') {
    fetch('components/info.php')
    .then(response => response.text())
    .then(result => document.querySelector('.content__info').innerHTML = result);   
    fetch('components/auth.php')
    .then(response => response.text())
    .then(result => document.querySelector('.content__block__auth').innerHTML = result);
  }



function changeBlock (event, file) {
  event.preventDefault()
  fetch(file)
  .then(response => response.text())
  .then(result => inner(result))
}

document.querySelector('.header__link__info').addEventListener('click', function(event) { changeBlock(event, 'components/info.php')} );

// document.querySelector('.header__link__info').onclick = (event) => {
//   event.preventDefault();
//   fetch('components/info.php')
//   .then(response => response.text())
//   .then(result => inner(result))
// }


document.querySelector('.header__link__bio').onclick = (event) => {
  event.preventDefault();
  fetch('components/bio.php')
  .then(response => response.text())
  .then(result => { 
                    inner(result);
                    abc();
                    let bioCalc = document.querySelector('.btn-calc');
                    bioCalc.addEventListener('click', calculate);
                    });
}

// document.querySelector('.header__link__auth').addEventListener('click', function(event) { changeBlock(event, 'components/auth_block.php')} );

document.querySelector('.header__link__auth').onclick = (event) => {
  event.preventDefault();
  fetch('components/auth_block.php')
  .then(response => response.text())
  .then(result => inner(result))
}

// document.querySelector('.auth').addEventListener('click', function(event) { changeBlock(event, 'components/auth.php')} );

document.querySelector('.auth').onclick = (event) => {
  event.preventDefault();
  fetch('components/auth.php')
  .then(response => response.text())
  .then(result => document.querySelector('.auth__form').innerHTML = result);
}

// document.querySelector('.reg').addEventListener('click', function(event) { changeBlock(event, 'components/reg.php')} );

document.querySelector('.reg').onclick = (event) => {
  event.preventDefault();
  fetch('components/reg.php')
  .then(response => response.text())
  .then(result => document.querySelector('.auth__form').innerHTML = result)
}

function inner(x) {
  document.querySelector('.content__block_main').innerHTML = x;
  document.querySelector('.header__burger').classList.remove('active')
  document.querySelector('.header__menu').classList.remove('active')
}

});
// function innerAuth(x) {
//   let authBlock = document.querySelector('.content__block__auth');
//   let authForm = authBlock.querySelector('.auth__form')
//   let mainBlock = document.querySelector('.content__block_main');
//     if (window.getComputedStyle(authBlock).getPropertyValue('display') == 'none') {
//         authForm.classList.remove('auth__form');
//     }
//     mainBlock.querySelector('.auth__form').innerHTML = x;
// }