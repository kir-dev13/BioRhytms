"use stricts";
//Готовим диаграмму
function Diagram () {
 var ctx = document.getElementById("myChart").getContext('2d');
 Chart.defaults.global.defaultFontColor = 'white';
 var myChart = new Chart (ctx, {
  type: 'line',
  data: {
   labels: [], //Подписи оси x
   datasets: [
    {
     label: 'f(x)', //Метка
     data: [], //Данные
     borderColor: 'blue', //Цвет
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
 //Заполняем данными
 // for (var x = daysAll - 10; x <= daysAll + 10; x++) {
 //  myChart.data.labels.push(x);
 //  myChart.data.datasets[0].data.push(bioRhytm(x, 23));
 // }
 //////////////////
let countDays = daysAll - 10; //счётчик дней для графика
// let j = dToday - 10;

for (var i = -10; i < 11; i++) {
  let j = dToday + i;
  myChart.data.labels.push(j);
  myChart.data.datasets[0].data.push(bioRhytm(countDays, 28))
  countDays++;

  console.log(sizeOfMonths[mToday])
  console.log(j)
}
//////////////////////
 //Обновляем
 myChart.update();


// function getDateFromDaysAll() { //написать функцию, которая из даты рождения и количества дней, возвращает число месяца
//   if (j < 0) {
//     j == sizeOfMonths[mToday] - j
//   }
//   if (j > sizeOfMonths[mToday]) {
//     j == 1
//   }
//   return j;
// }

 function bioRhytm(t, p) { //Вычисление нужной функции
  return (Math.sin(2*Math.PI * t / p ) * 100);
 }
}

//Ставим загрузку диаграммы на событие загрузки страницы
window.addEventListener("load", Diagram);
