import React from 'react';
import { render, screen } from '@testing-library/react';
import {createStore, applyMiddleware} from 'redux';
import reducer from '../rootReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from '../App';

const middleware =[thunk];

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);
const Wrapper = ({children}) => (
  <Provider store ={store}>{children}</Provider>
)

describe('App', () => {
  test('renders App component', () => {
    render(<App />, {wrapper:Wrapper});
  });
});