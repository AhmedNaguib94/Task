import { screen, render, cleanup } from "@testing-library/react"
import Users from "./users";
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

describe('users component', () => {
    test('get users api', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => []
        });
    
        renderWithRedux(<Router><Users /></Router>);
    
        const usersList = await screen.findAllByRole('listitem');
        expect(usersList).not.toHaveLength(0);
    })
    
    test('render component header', () => {
        renderWithRedux(<Router><Users /></Router>);
        expect(screen.getByText('Users')).toBeInTheDocument();
    })
})

