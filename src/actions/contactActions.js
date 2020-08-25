import * as types from './actionTypes'


class contactsActions {
    static loadContactsSuccess(contacts) {
        return {type: types.LOAD_CONTACTS_SUCCESS, contacts}
    }

    static addContactSuccess(contacts) {
        return {type: types.ADD_CONTACTS_SUCCESS, contacts}
    }

    static editContactSuccess(contacts) {
        return {type: types.EDIT_CONTACTS_SUCCESS, contacts}
    }

    static deleteContactSuccess(contacts) {
        return {type: types.DELETE_CONTACTS_SUCCESS, contacts}
    }
}


export default contactsActions