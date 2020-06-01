"use stricts"

document.querySelector('.header__link__info').onclick = (event) => {
  event.preventDefault();
  fetch('components/info.php')
  .then(response => response.text())
  .then(result => inner(result))
}

document.querySelector('.header__link__bio').onclick = (event) => {
  event.preventDefault();
  fetch('components/bio.php')
  .then(response => response.text())
  .then(result => { 
                    inner(result);
                    abc();
                    let bioCalc = document.querySelector('.btn-calc');
                    bioCalc.onclick = calculate;
                    });
}

document.querySelector('.header__link__auth').onclick = (event) => {
  event.preventDefault();
  fetch('components/auth.php')
  .then(response => response.text())
  .then(result => inner(result))
}

function inner(x) {
  document.querySelector('.content__block_main').innerHTML = x;
  document.querySelector('.header__burger').classList.remove('active')
  document.querySelector('.header__menu').classList.remove('active')
}