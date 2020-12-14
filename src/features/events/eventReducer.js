import { sampleData } from "../../app/sampleData"
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstants"


const initialState = {
    events: sampleData
}

export default function eventReducer(state = initialState, { type, payload }) {
    switch (type) {
        case CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, payload]
            }
        case UPDATE_EVENT:
            return {
                ...state,
                events: [...state.events.filter(evt => evt.id !== payload), payload]
            }
        case DELETE_EVENT:
            return {
                ...state,
                events: [...state.events.filter(evt => evt.id !== payload)]
            }
        default:
            return state;
    }
}

/// you just finished creating delete event and now you have to set the root Reducer