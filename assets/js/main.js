var app = new Vue({
  el: "#app",
  data: {
    isListDisplayed: true,
    messages: [
      {
        icon: "./assets/img/DNA_logo.svg",
        author: "ДНК Медик Лаб",
        title: "Результаты анализа DML48-000000",
        body: "Результаты анализа DML48-000000. Подробная информация в приложенном файле.",
        date: "3 минуты назад",
        unread: true,
        attachment: "./assets/img/DNA_test_result_DML48-000000.jpg",
      },
      {
        icon: "./assets/img/avatars/gracia.svg",
        author: "Gracia",
        title: "💥 Уникальное предложение только для Вас! 💥",
        body: "Прекрасная возможнось забрать всё, что хочешь!",
        date: "1 час назад",
      },
      {
        icon: "./assets/img/avatars/rts.svg",
        author: "RTS",
        title: "У нас большое обновление",
        body:
          "Мы упорно трудились, чтобы Вас удивить",
        date: "1 час назад",
      },
      {
        icon: "./assets/img/avatars/module.svg",
        author: "Модуль",
        title: "✅ -25% НА ОБУВЬ И СУМКИ!",
        body: "Срочно в гардероб: Скидка 35% на модные мастхэвы сезона",
        date: "3 часа назад",
      },
      {
        icon: "./assets/img/avatars/vam.svg",
        author: "Вам - подарок",
        title: "-50% на кроссовки, туфли и босоножки 👠👟 Следуйте за модой",
        body: "В нашей акции по бесплатной",
        date: "4 часа назад",
      },
      {
        icon: "./assets/img/avatars/mini.svg",
        author: "Наш мини-тест",
        title: "Прокачай свой МОЗГ!",
        body: "Профиль Сообщения Контакты Сообщества Ведущая деловая сеть",
        date: "6 часов назад",
      },
      {
        icon: "./assets/img/avatars/im.svg",
        author: "Интернет-магазин",
        title: "Бомбические промокоды со скидками до 50%",
        body: "Новая эра. Новые скорости. Рассрочка от 500 р/месяц с трейд-ин",
        date: "Сегодня",
      },
      {
        icon: "./assets/img/avatars/rc.svg",
        author: "Rman Cosmetics",
        title: "Вы чуть не опоздали… 🏃",
        body: "А также СЕКРЕТНАЯ акция внутри",
        date: "Сегодня",
      },
      {
        icon: "./assets/img/avatars/ew.svg",
        author: "EastWind",
        title: "⭑ Рекомендуемые акции на сегодня ⭑",
        body: "Детективы, романы, сказки и наука!",
        date: "Сегодня",
      },
      {
        icon: "./assets/img/avatars/popp.svg",
        author: "PoppShop",
        title: "Лучшие предложения недели 😊",
        body: "В торговых центрах такого нет! Онлайн-версия Ваша скидка",
        date: "Вчера",
      },
      {
        icon: "./assets/img/avatars/mini.svg",
        author: "Дипп Хайус",
        title: "📫 У вас новое личное сообщение",
        body: "Мы по вам скучаем! Открыть в браузере Мы в соцсетях",
        date: "Вчера",
      },
      {
        icon: "./assets/img/avatars/tk.svg",
        author: "Твои Купоны",
        title: "Массаж в центре здоровья ⬩ Прокат квадроцикла ⬩ База отдыха",
        body: "Бешенные скидки и халява! Забирай прямо сейчас",
        date: "Вчера",
      },
      {
        icon: "./assets/img/avatars/tk.svg",
        author: "Твои Купоны",
        title:
          "Ультразвуковая чистка зубов, отбеливание, удаление зуба мудрости в стоматологическом центре. Скидки до 80%",
        body: "Оформите прямо",
        date: "1 день назад",
      },
      {
        icon: "./assets/img/avatars/nav.svg",
        author: "NAVIGATOR SHOP",
        title: "💣 Бомбические акции! 👉 Держи промокоды",
        body: "Горячая распродажа! Более 1000 товаров с сумасшедшей скидкой",
        date: "1 день назад",
      },
      {
        icon: "./assets/img/avatars/ew.svg",
        author: "EastWind",
        title: "✅ -25% НА ОБУВЬ И СУМКИ!",
        body: "Скидки! Скидки 25% по промокоду FORYOU",
        date: "1 день назад",
      },
      {
        icon: "./assets/img/avatars/gracia.svg",
        author: "Gracia",
        title: "Вы чуть не опоздали… 🏃",
        body:
          "Старт курса 'ДО/ПОСЛЕ' уже через два дня! Промокод на скидку 1000 р",
        date: "1 день назад",
      },
      {
        icon: "./assets/img/avatars/fo.svg",
        author: "Finally Online",
        title: "Отложенный товар поступил в продажу",
        body: "Отложенный вами товар снова поступил в продажу! Успейте",
        date: "1 день назад",
      },
      {
        icon: "./assets/img/avatars/sr.svg",
        author: "Срочная информация",
        title: "номер пиксела-90787",
        body:
          "Здравствуйте! Вы меня не знаете, но я тот человек, который 2 месяца назад",
        date: "1 день назад",
      },
    ],
  },
  methods: {
    displayMessage(id) {
      if (id === 0) {
        this.isListDisplayed = false;
      }
    },
    displayList() {
      this.isListDisplayed = true;
    },
  },
});
