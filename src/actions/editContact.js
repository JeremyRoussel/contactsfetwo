import contactsAPI from '../api/contactsAPI';
import contactsActions from './contactActions'

let editContact = (contactBody) => {
    return function(dispatch) {
        return contactsAPI.editContact(contactBody).then(contacts => {
            console.log(contacts[0])
            dispatch(contactsActions.editContactSuccess(contacts[0]))
        }).catch(error => {
            throw(error)
        })
    }
}

export default editContact