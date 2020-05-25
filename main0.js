"use stricts";

let sizeOfMonths = {
                    1: 31,
                    2: 28,
                    3: 31,
                    4: 30,
                    5: 31,
                    6: 30,
                    7: 31,
                    8: 31,
                    9: 30,
                    10: 31,
                    11: 30,
                    12: 31
                  };

let leapYearsAll = [2028, 2024, 2020, 2016, 2012, 2008, 2004, 2000, 1996, 1992, 1988, 1984, 1980, 1976, 1972, 1968, 1964, 1960, 1956, 1952, 1948, 1944, 1940, 1936, 1932, 1928, 1924, 1920, 1916, 1912, 1908, 1904];

let d0 = 05;
let m0 = 05;
let y0 = 2020;

let dToday = 06;
let mToday = 05;
let yToday = 2020;


////////////////////////////////////////////////////////////////////


let yDif = yToday - y0 - 1;
let leapYears = [];
let dDif0 = 0;
let dDifToday = 0;
let dDif = 0;

leapYearsAll.forEach(function(item) { //Функция находит целые прошедшие високосные года с момента рождения до сегодня
  if (yToday > item && y0 < item) {
    leapYears.push(item);
  }
  // //сразу добавляем по одному дню, если сейчас високосный и февраль уже прошёл. или родился в високосный до 29 февраля.
  if ((y0 == item && m0 < 2) || (y0 == item && m0 == 2 && d0 < 29)) {
    dDif++
  }
  if ((yToday == item && mToday > 2 && yToday != y0) || (yToday == item && mToday == 2 && dToday > 28 && yToday != y0)) {
    dDif++
  }
});

getDaysReminder();

let daysAll = yDif * 365 + leapYears.length + dDif;

function getDaysReminder() {
  for (let month in sizeOfMonths) { // перебираем объект sizeOfMonths и находим количество дней после дня рождения до конца года рождения
    if (m0 < month) {
      dDif0 += sizeOfMonths[month];
    } else if (m0 == month) {
      dDif0 += sizeOfMonths[month] - d0;
    }
    if (mToday > month) {          //здесь находим количество дней, которые прошли с начала года
      dDifToday += sizeOfMonths[month];
    } else if (mToday == month) {
      dDifToday += dToday;
    }
  }
  dDif += dDifToday + dDif0;
  return dDif;
}

console.log(daysAll); //
console.log(yDif);
console.log(dDif);
console.log(dDif0);
console.log(dDifToday);
// console.log(yDif);
// console.log(leapYears.length);
// console.log(leapYears);


///////////////////////////////////////////////////////////////////
// let fFLY; //Переменная первого ближайшего високосного года
// var daysInFullYears = 0;
// let dayToFirstLeapYear


// getFullFirstLeapYear();
//
// getDaysValueFromfFLYToToday();
// console.log(fFLY)
// console.log(daysInFullYears);


// console.log(daysInFullYears);
//Находим первый полный високосный год с момента даты рождения;
// function getFullFirstLeapYear() {
//   for (i = 0; i < leapYears.length; i++) {
//     if (y0 >= leapYears[i]) {
//     fFLY = leapYears[i - 1];
//       return fFLY;
//     }
//   }
// }

//Считаем количество полных дней от первого високосного года до текущего
// function getDaysValueFromfFLYToToday() {
//   for (i = 0; i < (yToday - fFLY) / 4; i++) {
//     for (j = 0; j < 4; j++) {
//       if (j == 0) {
//         daysInFullYears += 366;
//       } else {
//         daysInFullYears += 365;
//       }
//     }
//   }
//   return daysInFullYears;
// }

// function getDaysValueToFirstLeapYear() {
//   for (i = 0; i < leapYears.length; i++) {
//     if (y0 > leapYears[i]) {
//       y1 = leapYears[i - 1] - y0 - 1; //количество полных лет до високосного года;
//       if (y1 == -1) {
//           y1 = 3;
//       }
//       break;
//     }
//   }
//   dayToFirstLeapYear = 365 * y1; //количество дней в полных годах до ближайшего високосного года
//   return dayToFirstLeapYear;
// }

// Считаем количество полных лет от ближайшего високосного года до текущего


  // daysInFullYears = daysInFullYears + dayToFirstLeapYear;
