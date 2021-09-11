import { screen, render, cleanup } from "@testing-library/react"
import UserDetails from "./user-details";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../../core/store/reducer';
import { BrowserRouter as Router } from 'react-router-dom';

delete window.matchMedia
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })

afterEach(cleanup);

const renderWithRedux = (
    component,
    {initialState, store = createStore(reducer, initialState)} = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('user details component', () => {
    test('render component header', () => {
        renderWithRedux(<Router><UserDetails /></Router>);
        expect(screen.getByText('User Details')).toBeInTheDocument();
    })

    test('render images', async () => {
        renderWithRedux(<Router><UserDetails /></Router>);
        expect(await screen.findAllByRole('img')).toHaveLength(2);
    })

    test('render items', async () => {
        renderWithRedux(<Router><UserDetails /></Router>);
        expect(await screen.findAllByRole('article')).toHaveLength(1);
    })
})

