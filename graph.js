"use stricts";
//Готовим диаграмму
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
  for (var i = daysAll - 10, j = dToday - 10, k = 1; i <= daysAll + 10, j <= dToday + 10; i++, j++) {
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
window.addEventListener("load", Diagram);
