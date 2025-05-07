const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
  const value     = drop.querySelector('.dropdown__value');
  const list      = drop.querySelector('.dropdown__list');
  const items     = drop.querySelectorAll('.dropdown__item');

  //  Нажатие на «кнопку» открывает / закрывает список
  value.addEventListener('click', event => {
    event.preventDefault();

    // Закроем все чужие открытые списки (если их несколько)
    document.querySelectorAll('.dropdown__list_active')
            .forEach(l => l !== list && l.classList.remove('dropdown__list_active'));

    list.classList.toggle('dropdown__list_active');
  });

  // Клик по пункту меню
  items.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();                   // запрет перехода по ссылке
      value.textContent = item.textContent;     // ставим выбранное значение
      list.classList.remove('dropdown__list_active');
    });
  });

  // Клик вне текущего dropdown закрывает его
  document.addEventListener('click', event => {
    if (!drop.contains(event.target)) {
      list.classList.remove('dropdown__list_active');
    }
  });
});