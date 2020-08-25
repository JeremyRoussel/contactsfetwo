import * as types from '../actions/actionTypes';
import initialState from './initialState';

let contacts = (state=initialState.contacts, action) => {
    switch (action.type) {
        case types.LOAD_CONTACTS_SUCCESS:
            return action.contacts
        case types.ADD_CONTACTS_SUCCESS:
            console.log(action.contacts[0])
            return [...state, action.contacts[0]]
        case types.EDIT_CONTACTS_SUCCESS:
            console.log(action.contacts)
            return [
                ...state.filter(contacts => contacts.id !== action.contacts.id),
                action.contacts]
            
        case types.DELETE_CONTACTS_SUCCESS:
            return action.contacts
        default:
            return state
    }
}

export default contacts