

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Био ритмы</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- //оболочка для демонстрации -->
  <div class="wrapper">
    <!-- //Контент -->
    <header class="header">
    <div class="container">
      <div class="header__body">
        <!-- <a href="" class="header__logo">
          <img src="img/logo.jpg" alt="лого">
        </a> -->
        <div class="header__burger">
          <span></span>
        </div>
        <nav class="header__menu">
          <ul class="header__list">
            <li class="header__listElement">
              <a class="header__link header__link__info" href="">Информация</a>
            </li>
            <li class="header__listElement">
              <a class="header__link header__link_active header__link__bio" href="#">Биоритмы</a>
            </li>
            <li class="header__listElement">
              <a class="header__link header__link__auth" href="#">Авторизация</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </header>
    <div class="content">
      <div class="content__container">
        <div class="content__block content__info">
          <p class="content__info__text">
            На данном сайте вы можете рассчитать три биоритма человека - физический, интеллектуальный и эмоциональный. Согласно теории о трёх биоритмах, с момента рождения человека его физический, эмоциональный и интеллектуальный энергитические центры подвержены цикличным подъёмам и спадам с периодами 23, 28 и 33 дня соответственно.
          </p>
          <p class="content__info__text">
            Автор данного ресурса не утверждает и не опровергает правдоподобность этой теории. Данный сайт был сделан с целью практики в области создания веб приложений.
          </p>
          <p class="content__info__text">
            Сайт сделан с помощью HTML5, CSS3, JavaScript. Алгоритм рассчёта выполнен на JS. Графики строятся при помощи библоитеки Chart.js.
          </p>
        </div>
        <div class="content__block content__block_main">
          <div class="content__block__input">
            <h3 class="content__block__element">Рассчёт биоритмов</h3>
            <form action="" class="content__block__element">
            <div class="input">
              <label class="content__block__element">Введите дату рождения:</label>
              <input class="input-group content__block__element birthDate" type="date" placeholder="Дата рождения" name="birthday">
            </div>
            <div class="input">
              <label class="content__block__element">Рассчитать для даты:</label>
              <input class="input-group content__block__element" type="date" placeholder="Дата рождения" name="today">
            </div>
              <input class="content__block__element btn btn-calc" type="submit" value="Рассчитать">
            </form>
            <p class="content__block__element daysAll"></p>
          </div>
          <div class="content__block__bio">
              <canvas id="myChart" class="canvas"></canvas>
          </div>
        </div>
        <div class="content__block content__block__auth">
          <div class="authmenu">
            <ul class="header__list">
              <li class="header__listElement">Регистрация</li>
              <li class="header__listElement"> | </li>
              <li class="header__listElement">Аутентификация</li>
            </ul>
          </div>
          <div class="input">
            <label class="content__block__element" for="">Логин</label>
            <input type="text" class="input-group content__block__element" placeholder="логин" name="login">
          </div>
        </div>
      </div>
    </div>

  </div>

<script type="text/javascript" src="todayDateInput.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script type="text/javascript" src = "main.js"></script>
<!-- <script type="text/javascript" src = "graph.js"></script> -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="menu.js" type="text/javascript"></script>
<script src="ajax.js" ></script>
</body>
</html>
