import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import reducer from '../rootReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Basket from '../components/Basket';

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

describe('Basket', () => {
  test('renders Basket component', () => {
    render(
      <Basket />, {wrapper:Wrapper}
    );

    screen.debug();
  });
});