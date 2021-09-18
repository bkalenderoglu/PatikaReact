import { useState, useEffect } from 'react'
import List from './List.js'
import Form from './Form.js/index.js'
import "./styles.css"

function Contacts() {
    const [contacts, setContacts] = useState([

        {
            fullname: "Mehmet",
            phone_number: "123123"
        },{
            fullname: "Aycan",
            phone_number:" 456456"
        },{
            fullname: "Ali",
            phone_number:" 789789"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])
    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts} /> 
        </div>
    )
}

export default Contacts
