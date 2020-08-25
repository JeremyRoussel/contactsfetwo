import contactsAPI from '../api/contactsAPI';
import contactsActions from './contactActions'

let addContact = (contactBody) => {
    return function(dispatch) {
        return contactsAPI.addContact(contactBody).then(contacts => {
            dispatch(contactsActions.addContactSuccess(contacts))
        }).catch(error => {
            throw(error)
        })
    }
}

export default addContact