import './styles.css';
import menu from './data/menu.json';
import menuCard from './menuCard.hbs';

const ref = {
  themeInput: document.querySelector('#theme-switch-toggle'),
  menu: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
};
ref.menu.insertAdjacentHTML('beforeend', menuCard(menu));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

ref.themeInput.checked = localStorage.getItem('theme') === Theme.DARK;

ref.body.classList.add(
  localStorage.getItem('theme') === null
    ? Theme.LIGHT
    : localStorage.getItem('theme'),
);

ref.themeInput.addEventListener('click', changeTheme);

function changeTheme(event) {
  event.target.checked
    ? togTheme(Theme.LIGHT, Theme.DARK)
    : togTheme(Theme.DARK, Theme.LIGHT);
  function togTheme(rem, add) {
    ref.body.classList.replace(rem, add);
    localStorage.setItem('theme', add);
  }
}
