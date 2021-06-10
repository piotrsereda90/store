import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
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
  <Router>
    <Provider store ={store}>{children}</Provider>
  </Router>
)

describe('Basket', () => {
  test('renders Basket component', () => {
    render(
      <Basket />, {wrapper:Wrapper}
    );
      const removeButton = screen.queryByText(/description.part40/)
      expect(removeButton).toBeNull()

      let orderProductNumber = screen.queryByText(/1/)
      expect(orderProductNumber).toBeNull()


      const addProductAmount = screen.queryByText(/'+'/)
      expect(addProductAmount).toBeNull()

      const removeProductAmount = screen.queryByText(/'-'/)
      expect(removeProductAmount).toBeNull()
  });
});