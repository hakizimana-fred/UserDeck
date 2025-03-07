import { ACTION_TYPES } from "../../constants";
import { User } from "../../types";

export const initialFormState: User = {
    id: Math.random().toString(),
    name: '',
    email: '',
    phone: ''
}


export default function formReducer(state = initialFormState, action: {type: string, payload: {name: string, value: string}}) {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_FORM:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case ACTION_TYPES.CLEAR_FORM:
            return initialFormState
        default:
            return state
    }
}