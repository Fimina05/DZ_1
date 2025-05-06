const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.onclick = function() {
  // Увеличиваем счётчик
  counter.textContent = Number(counter.textContent) + 1;

  // Меняем размер печеньки
  if (cookie.width === 200) {
    cookie.width = 250;
    cookie.height = 250;
  } else {
    cookie.width = 200;
    cookie.height = 200;
  }
};