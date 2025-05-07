// Функция для работы с вкладками
function initTabs() {
    // Находим все наборы вкладок на странице
    const tabContainers = document.querySelectorAll('.tab__navigation');
    
    tabContainers.forEach((container, containerIndex) => {
        // Находим вкладки и контент для текущего набора
        const tabs = container.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.tab__contents')[containerIndex]
            .querySelectorAll('.tab__content');

        // Добавляем обработчик для каждой вкладки
        tabs.forEach((tab, tabIndex) => {
            tab.addEventListener('click', () => {
                // Убираем активный класс у всех вкладок и контента
                tabs.forEach(t => t.classList.remove('tab_active'));
                contents.forEach(c => c.classList.remove('tab__content_active'));

                // Добавляем активный класс текущей вкладке и контенту
                tab.classList.add('tab_active');
                contents[tabIndex].classList.add('tab__content_active');
            });
        });
    });
}

// Запускаем после загрузки страницы
document.addEventListener('DOMContentLoaded', initTabs);