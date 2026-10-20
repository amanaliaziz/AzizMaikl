// Меню
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const toggleMenu = (open) => {
  burger.classList.toggle('open', open);
  menu.classList.toggle('open', open);
};
burger.addEventListener('click', () => toggleMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

// Анимация полос навыков
const bars = document.querySelectorAll('.bar');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelector('.fill').style.width = e.target.dataset.v + '%';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
bars.forEach(b => io.observe(b));

// Форма (демо: отправка не подключена к серверу)
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Спасибо! Сообщение отправлено. Amanali свяжется с вами.');
  e.target.reset();
});
