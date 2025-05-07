// Находим все ротаторы на странице
const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let index = 0;

    setInterval(() => {
        // Убираем активный класс у текущего
        cases[index].classList.remove('rotator__case_active');
        // Вычисляем следующий индекс
        index = (index + 1) % cases.length;
        // Ставим активный класс следующему
        cases[index].classList.add('rotator__case_active');
    }, 1000);
});