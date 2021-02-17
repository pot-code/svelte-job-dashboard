import 'normalize.css';
import '../public/global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#000000',
      },
      {
        name: 'dark blue',
        value: '#001130',
      },
    ],
  },
};
