class contactsAPI {
    static getAllContacts() {
        return fetch('http://localhost:3001/crud')
            .then(response => response.json())
            .catch(error => error)
    }


    // contactBody of type: { first: "", last: "", email: "", phone: "", location: "", hobby: "" }

    static addContact(contactBody){
        return fetch('http://localhost:3001/crud', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: contactBody})
            .then(response => response.json())
            .catch(error => error)
    }

    // contactBody of type: { id: "", first: "", last: "", email: "", phone: "", location: "", hobby: "" }

    static editContact(contactBody){
        return fetch('http://localhost:3001/crud', {
            method: 'put',
            headers: {
              'Content-Type': 'application/json'
            },
            body: contactBody})
            .then(response => {
              console.log(`put response: ${response}`)
              return response.json()})
            .catch(error => error)
    }

    // id sent only

    static deleteContact(id){
        return fetch('http://localhost:3001/crud', {
            method: 'delete',
            headers: {
              'Content-Type': 'application/json'
            },
            body: id})
            .then(response => response.json())
            .catch(error => error)
    }
}

export default contactsAPI