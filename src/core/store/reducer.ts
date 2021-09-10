import { LOADING } from "./actions"

const reducer = (state = initialState(), action: any) => {
    if (action.type === LOADING) {
        return {
            loading: !state.loading,
        }
    }
    return state
}

const initialState = () => {
    return {
        loading: false
    }
}

export default reducer;