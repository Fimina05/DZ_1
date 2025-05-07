// Находим все элементы с классом reveal
const reveals = document.querySelectorAll('.reveal');

// Функция проверки видимости элемента
function isVisible(element) {
    const { top, bottom } = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    // Элемент виден, если его верх или низ находится в пределах окна
    return (top < windowHeight) && (bottom > 0);
}

// Функция, которая добавляет класс reveal_active видимым элементам
function checkReveal() {
    reveals.forEach(reveal => {
        if (isVisible(reveal)) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

// Проверяем при загрузке страницы и при прокрутке
window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);