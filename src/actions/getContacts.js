import contactsAPI from '../api/contactsAPI';
import contactsActions from './contactActions'

let getContacts = () => {
    return function(dispatch) {
        return contactsAPI.getAllContacts().then(contacts => {
            dispatch(contactsActions.loadContactsSuccess(contacts))
        }).catch(error => {
            throw(error)
        })
    }
}

export default getContacts