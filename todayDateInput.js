"use strict"


function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}





function abc() {
  let date = new Date;
  let d1 = date.getDate();
  let m1 = date.getMonth() + 1;
  let y1 = date.getFullYear();
  let dateValue
  if (m1 < 10) {
    m1 = '0' + m1;
  }
  if (d1 < 10) {
   d1 = '0' + d1;
  }
  dateValue = y1 + '-' + m1 + '-' + d1;
  let today = document.querySelector('input[name="today"]')
  today.value = dateValue;
  
  // let cookieBirth = getCookie('cookieName');
  // console.log(getCookie('cookieName'))
  if (getCookie('cookieName') != undefined) {
  document.querySelector('input[name="birthday"]').value = getCookie('cookieName');
  }
}
abc()