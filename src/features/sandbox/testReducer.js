export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const RESET = 'RESET'


export function increment(amount) {
    return {
        type: INCREMENT_COUNTER,
        payload: amount
    }
}
export function decrement(amount) {
    return {
        type: DECREMENT_COUNTER,
        payload: amount
    }
}

const initialState = {
    data: 42
}



export default function testReducer(state = initialState, { type, payload }) {
    switch (type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                data: state.data + payload
            };
        case DECREMENT_COUNTER:
            return {
                ...state,
                data: state.data - payload
            }
        case RESET:
            return {
                ...state,
                data: state.date = 0
            }
        default:
            return state
    }
}