import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux/';
import configureStore from 'redux-mock-store';
import Authorize from '../index';

const mockStore = configureStore([]);

const store = mockStore({
  session: {
    clientID: 'abc',
    clientSecret: 'abc',
  },
});

it('displays authorize page properly', () => {
  render(
    <Provider store={store}>
      <Authorize />
    </Provider>
  );
  let authorizeButton = screen.getByRole('button', { name: 'Authorize' });
  expect(authorizeButton).toBeInTheDocument();
});
