import contactsAPI from '../api/contactsAPI';
import contactsActions from './contactActions'

let deleteContact = (id) => {
    return function(dispatch) {
        return contactsAPI.deleteContact(id).then(contacts => {
            dispatch(contactsActions.deleteContactSuccess(contacts))
        }).catch(error => {
            throw(error)
        })
    }
}

export default deleteContact