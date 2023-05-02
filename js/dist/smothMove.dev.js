"use strict";

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // отменяем стандартное поведение ссылки
    // получаем id элемента, к которому нужно прокрутить

    var target = document.querySelector(this.getAttribute('href')); // скроллим до элемента с плавностью

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});