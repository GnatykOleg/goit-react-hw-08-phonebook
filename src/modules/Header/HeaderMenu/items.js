import shortid from 'shortid';
export const items = [
  {
    id: shortid(),
    to: '/',
    text: 'Главная',
  },
  {
    id: shortid(),
    to: '/contacts',
    text: 'Контакты',
  },
];
