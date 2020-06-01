"use stricts";



let leapYearsAll = [2028, 2024, 2020, 2016, 2012, 2008, 2004, 2000, 1996, 1992, 1988, 1984, 1980, 1976, 1972, 1968, 1964, 1960, 1956, 1952, 1948, 1944, 1940, 1936, 1932, 1928, 1924, 1920, 1916, 1912, 1908, 1904];

let today2 = document.querySelector('input[name="today"]');
let birthDate = document.querySelector('.birthDate');
let bioCalc = document.querySelector('.btn-calc');
bioCalc.onclick = calculate;
function calculate(event) {
  event.preventDefault();
  console.log("клик")
let  arrayToday = today2.value.split('-');
let arrayBirthDate = birthDate.value.split('-');

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


let dToday = +arrayToday[2];
let mToday = +arrayToday[1];
let yToday = +arrayToday[0];

let d0 = +arrayBirthDate[2];
let m0 = +arrayBirthDate[1];
let y0 = +arrayBirthDate[0];


if ( arrayBirthDate[0] == undefined || arrayBirthDate[1] == undefined || arrayBirthDate[2] == undefined || arrayToday[0] == undefined || arrayToday[1] == undefined || arrayToday[2] == undefined) {
  document.querySelector('.daysAll').innerHTML = 'Не все поля заполнены';
  return;
}

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
    //сразу добавляем по одному дню, если сейчас високосный и февраль уже прошёл. или родился в високосный до 29 февраля.
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

document.querySelector('.daysAll').innerHTML ='С момента рождения до рассчитываемой даты: ' + daysAll + ' дней';

Diagram();
// console.log(dToday);
// console.log(mToday);
// console.log(yToday); //
// console.log(d0); //
// console.log(m0); //
// console.log(y0); //
// console.log(leapYears); //
// console.log(yDif);
// console.log(daysAll);
// console.log(dDifToday);
// console.log(leapYears.length);
// console.log(leapYears);
function Diagram () {
 var ctx = document.getElementById("myChart").getContext('2d');
 Chart.defaults.global.defaultFontColor = 'white';
 Chart.defaults.global.elements.point.radius = 1;
 var myChart = new Chart (ctx, {
  type: 'line',
  data: {
   labels: [], //Подписи оси x
   datasets: [
    {
     label: 'физический', //Метка
     data: [], //Данные
     borderColor: 'red', //Цвет
     borderWidth: 2, //Толщина линии
     fill: false //Не заполнять под графиком
   },

    {
     label: 'эмоциональный', //Метка
     data: [], //Данные
     borderColor: 'green', //Цвет
     borderWidth: 2, //Толщина линии
     fill: false //Не заполнять под графиком
   },

    {
     label: 'интеллектуальный', //Метка
     data: [], //Данные
     borderColor: 'purple', //Цвет
     borderWidth: 2, //Толщина линии
     fill: false //Не заполнять под графиком
    }
    //Можно добавить другие графики

   ]
  },
  options: {
   responsive: true, //Вписывать в размер canvas
   scales: {
    xAxes: [{
     display: true
    }],
    yAxes: [{
     display: true
    }]
   }
  }
 });


fillDataChart();

//////////////////////
 //Обновляем
 myChart.update();


function fillDataChart() { //Заполняем данными
  if (leapYearsAll.includes(yToday)) {
    sizeOfMonths[2] = 29;
  }
  for (var i = daysAll - 5, j = dToday - 5, k = 1; i <= daysAll + 5, j <= dToday + 5; i++, j++) {
    if (j < 1) {
      myChart.data.labels.push(sizeOfMonths[mToday - 1] + j)
    } else if (j > sizeOfMonths[mToday]) {
      myChart.data.labels.push(k);
      k++;
    } else {
      myChart.data.labels.push(j)
    };
    myChart.data.datasets[0].data.push(bioRhytm(i, 23))
    myChart.data.datasets[1].data.push(bioRhytm(i, 28))
    myChart.data.datasets[2].data.push(bioRhytm(i, 33))
  }
}

 function bioRhytm(t, p) { //Вычисление нужной функции
  return (Math.sin(2*Math.PI * t / p ) * 100).toFixed(2);
 }
}

//Ставим загрузку диаграммы на событие загрузки страницы
// bioCalc.addEventListener("click", Diagram);

}

