
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // отменяем стандартное поведение ссылки
        
        // получаем id элемента, к которому нужно прокрутить
        const target = document.querySelector(this.getAttribute('href'));
        
        // скроллим до элемента с плавностью
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});