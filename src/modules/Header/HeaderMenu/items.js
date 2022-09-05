import shortid from 'shortid';
export const items = [
  {
    id: shortid(),
    to: '/',
    text: 'home',
    private: false,
  },
  {
    id: shortid(),
    to: '/contacts',
    text: 'contacts',
    private: true,
  },
];
