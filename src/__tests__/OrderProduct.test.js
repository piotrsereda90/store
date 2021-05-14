
import React from 'react';

import {render, screen, fireEvent } from '@testing-library/react';
import {createStore, applyMiddleware} from 'redux';
import reducer from '../rootReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import OrderProduct from '../components/ProductCard/OrderProduct';
import {Router} from 'react-router-dom';
import { createMemoryHistory } from 'history'

const history = createMemoryHistory()

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
  <Router history={history}>
    <Provider store ={store}>{children}</Provider>
  </Router>
)

describe('OrderProduct', () => {
  test('renders OrderProduct component', () => {
    render(<OrderProduct/>, {wrapper:Wrapper});

    expect( screen.getByRole('button', { name: /description.part37/i })).toBeInTheDocument();
    screen.debug();

    expect( screen.getByRole('button', { name: /description.part38/i })).toBeInTheDocument();
    screen.debug();
  });
});