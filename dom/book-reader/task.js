document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
    const fontControls = document.querySelector('.book__control_font-size');

    // Обработчик изменения размера шрифта
    fontControls.addEventListener('click', (e) => {
        e.preventDefault(); // Отменяем переход по ссылке

        if (!e.target.classList.contains('font-size')) {
            return; // Клик не по кнопке размера
        }

        // Убираем активный класс у всех кнопок
        fontControls.querySelectorAll('.font-size').forEach(button => {
            button.classList.remove('font-size_active');
        });

        // Добавляем активный класс кликнутой кнопке
        e.target.classList.add('font-size_active');

        // Убираем все классы размеров у книги
        book.classList.remove('book_fs-big', 'book_fs-small');

        // Добавляем нужный класс размера
        const size = e.target.dataset.size;
        if (size === 'big') {
            book.classList.add('book_fs-big');
        } else if (size === 'small') {
            book.classList.add('book_fs-small');
        }
    });
});