import { screen, render, cleanup } from "@testing-library/react"
import UserForm from "./user-form";
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

describe('user form component', () => {
    test('render form', async () => {
        renderWithRedux(<Router><UserForm /></Router>);
        expect(await screen.findAllByRole('form')).toHaveLength(1);
    })

    test('render first name input', async () => {
        renderWithRedux(<Router><UserForm /></Router>);
        expect(await screen.findAllByRole('first-name')).toHaveLength(1);
    })

    test('render last name input', async () => {
        renderWithRedux(<Router><UserForm /></Router>);
        expect(await screen.findAllByRole('last-name')).toHaveLength(1);
    })

    test('render email input', async () => {
        renderWithRedux(<Router><UserForm /></Router>);
        expect(await screen.findAllByRole('email')).toHaveLength(1);
    })

    test('render submit button', async () => {
        renderWithRedux(<Router><UserForm /></Router>);
        expect(await screen.findAllByRole('button')).toHaveLength(1);
    })
})

