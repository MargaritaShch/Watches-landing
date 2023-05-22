//LANGUAGE
const translation = {
  title: {
    ge: "სილამაზის სალონი",
    ru: "Cалон красоты",
    en: "Beauty salon",
  },
  "active-1": {
    ge: "Ჩვენს შესახებ",
    ru: "O нас",
    en: "About us",
  },
  "active-2": {
    ge: "ფასი",
    ru: "Цены",
    en: "Prices",
  },
  "active-3": {
    ge: "მიმოხილვები",
    ru: "Отзывы",
    en: "Reviews",
  },
  "active-4": {
    ge: "კონტაქტები",
    ru: "Контакты",
    en: "Сontact",
  },
  menu_button: {
    ge: "Შეხვედრის დანიშვნა",
    ru: "Записаться на прием",
    en: "Make an appointment",
  },
  "title-name": {
    ge: "სახელი",
    ru: "Кабинет Косметологии",
    en: "Cosmetology room",
  },
  "subtitle-name": {
    ge: "თქვენი სილამაზისა და ჯანმრთელობის შექმნა!",
    ru: "Комплексный подход к созданию Вашей красоты и здоровья!",
    en: "An integrated approach to creating your beauty and health!",
  },
  "section-about-us": {
    ge: "Ჩვენს შესახებ",
    ru: "O нас",
    en: "About us",
  },
  "subtitle-about-us": {
    ge: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ad accusantium harum ducimus quod corrupti alias veritatis doloremque culpa, est facilis molestiae quia quaerat commodi facere nostrum? Quibusdam, vel ab? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi itaque aliquam, quae, quasi est accusamus, quis neque eos asperiores aliquid magnam? Assumenda odio ratione deleniti voluptates cumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla culpa illo, rem perferendis velit suscipit maiores tempore itaque, debitis accusamus incidunt unde aperiam, autem vitae similique nihil amet cum voluptatibus.",
    ru: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ad accusantium harum ducimus quod corrupti alias veritatis doloremque culpa, est facilis molestiae quia quaerat commodi facere nostrum? Quibusdam, vel ab? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi itaque aliquam, quae, quasi est accusamus, quis neque eos asperiores aliquid magnam? Assumenda odio ratione deleniti voluptates cumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla culpa illo, rem perferendis velit suscipit maiores tempore itaque, debitis accusamus incidunt unde aperiam, autem vitae similique nihil amet cum voluptatibus.",
    en: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ad accusantium harum ducimus quod corrupti alias veritatis doloremque culpa, est facilis molestiae quia quaerat commodi facere nostrum? Quibusdam, vel ab? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi itaque aliquam, quae, quasi est accusamus, quis neque eos asperiores aliquid magnam? Assumenda odio ratione deleniti voluptates cumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla culpa illo, rem perferendis velit suscipit maiores tempore itaque, debitis accusamus incidunt unde aperiam, autem vitae similique nihil amet cum voluptatibus.",
  },
  "service-title": {
    ge: "ჩვენი უპირატესობები",
    ru: "Наши преимущества",
    en: "Our advantages",
  },
  "contact-title": {
    ge: "კონტაქტები",
    ru: "Контакты",
    en: "Сontacts",
  },
  "service-subtitle-1": {
    ge: "თანამედროვე აღჭურვილობა",
    ru: "Современное оборудование",
    en: "Modern equipment",
  },
  "service-subtitle-2": {
    ge: "კვალიფიციური სპეციალისტი",
    ru: "Квалифицированный специалист",
    en: "Qualified specialist",
  },
  "service-subtitle-3": {
    ge: "მოქნილი გადახდის სისტემა",
    ru: "Гибкая система оплаты",
    en: "Flexible payment system",
  },
  "price-title": {
    ge: "ფასი",
    ru: "Цены",
    en: "Prices",
  },
  touch: {
    ge: "Შეხვედრის დანიშვნა",
    ru: "Записаться на прием",
    en: "Make an appointment",
  },
  "title-reviews": {
    ge: "გამოხმაურება ჩვენი კლიენტებისგან",
    ru: "Отзывы наших клиентов",
    en: "Feedback from our clients",
  },
  submit: {
    ge: "დატოვეთ გამოხმაურება",
    ru: "Оставить отзыв",
    en: "Leave feedback",
  },
  "footer-menu-title": {
    ge: "მენიუ",
    ru: "Меню",
    en: "Menu",
  },
  "active-footer-1": {
    ge: "Ჩვენს შესახებ",
    ru: "O нас",
    en: "About us",
  },
  "active-footer-2": {
    ge: "ფასი",
    ru: "Цены",
    en: "Prices",
  },
  "active-footer-3": {
    ge: "მიმოხილვები",
    ru: "Отзывы",
    en: "Reviews",
  },
  "connect-with-us": {
    ge: "დაკავშირება ჩვენთან",
    ru: "Связаться с нами",
    en: "Connect with us",
  },
  "our-socail": {
    ge: "Სოციალური მედია",
    ru: "Социальные сети",
    en: "Social media",
  },
  "map-title": {
    ge: "ჩვენი მისამართი: თბილისი, თავისუფლების მოედანი,...",
    ru: "Наш адрес: г.Тбилиси, Площадь свободы, ...",
    en: "Our address: Tbilisi, Freedom Square, ...",
  },
};
    // Get the select element
    const select = document.querySelector('select');
    const allLang = [ 'ge', 'ru', 'en']
    //change url page
    select.addEventListener('change', changeURLLanguage);
    //перенаправление на URL с указанием языка..Function to change the URL when the select element changes
    function changeURLLanguage(){
      let lang = select.value;
      //дописывание языка в текущий URL в виде HASH - часть URL, которая идет после символа решетки '#', включая символ '#'
      //location. href возвращает href URL текущей страницы
      //window.location.pathname возвращает путь и имя файла текущей страницы
      location.href = window.location.pathname + "#" + lang;
      //перезагрузить документ по текущему URL(переброс на этот же url но с указаниеь языка)
      location.reload();
    };

    function changeLanguage(){
      let hash = window.location.hash;
      console.log(hash);
      hash = hash.substring(1); //убрать решетку
      console.log(hash); //result = ru
      //если не находим hash в массиве, то делаем язык по умолчанию
      if(!allLang.includes(hash)){
        location.href = window.location.pathname + "#ge" ;
        location.reload();
      }
      //присвоение нужного языка(мехаизм переключения)
      select.value = hash;
    // document.querySelector(".active-1").innerHTML =
    // translation["active-1"][hash];
        for(let key in translation){
            //провекрка наличия элементов (класса), В СЛУЧАЕ ИЗМЕНЕНИЯ НАЗВАНИЯ КЛАССОВ(ТИПИЧНАЯ ОШИБКА: Uncaught TypeError: Cannot set property 'innerHTML of null... )
            let elem = document.querySelector(".lang-" + key);
            if(elem) {
                elem.innerHTML = translation[key][hash];
            };  
        }
    };
    changeLanguage();


//СКРОЛЛ ПО СТРАНИЦE
  // находим все пункты меню и сохраняем их в переменную
  const menuItems = document.querySelectorAll('.nav_li');
  // добавляем обработчик клика на каждый пункт меню
  menuItems.forEach(item => {
    item.addEventListener('click', event => {
      // отменяем стандартное поведение ссылки
      event.preventDefault();
      // получаем значение атрибута class кликнутого элемента
      const target = event.target.getAttribute('class');
      // проверяем значение атрибута и осуществляем соответствующий скролл
      if (target === 'lang-active-1') {
        const element = document.getElementById('scrollable-container');
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (target === 'lang-active-2') {
        const element = document.querySelector('.lang-price');
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (target === 'lang-active-3') {
        const element = document.querySelector(".reviews");
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (target === 'lang-active-4') {
        const element = document.querySelector(".main-footer");
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

//СКРОЛЛ ПО СТРАНИЦE C FOOTER
  const menuItems1 = document.querySelectorAll(".nav_li-1");
  menuItems1.forEach((item) => {
    item.addEventListener("click", (event) => {

      event.preventDefault();
      const target1 = event.target.getAttribute("class");
      if (target1 === "lang-active-footer-1") {
        const element1 = document.getElementById("scrollable-container");
        element1.scrollIntoView({ behavior: "smooth" });
      } else if (target1 === "lang-active-footer-2") {
        const element1 = document.querySelector(".lang-price");
        element1.scrollIntoView({ behavior: "smooth" });
      } else if (target1 === "lang-active-footer-3") {
        const element1 = document.querySelector(".reviews");
        element1.scrollIntoView({ behavior: "smooth" });
      } 
    });
  });