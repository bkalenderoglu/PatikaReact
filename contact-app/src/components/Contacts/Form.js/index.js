import { useState, useEffect } from 'react'
import "../styles.css"

const initialFormValues = { fullname:"", phone_number:"" };
function Form({ addContact, contacts }) {

    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        // after adding contact empty the form values - second approach
        setForm(initialFormValues);
    }, [contacts])

    const onChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (!form.fullname || !form.phone_number) {
            return false;
        }
        addContact([...contacts, form]);
        // after adding contact empty the form values - first approach
        // setForm(initialFormValues);
    };

    return (
        <form onSubmit={onSubmit} >    
            <div>
                <input className="input" name="fullname" 
                       placeholder="Full Name" 
                       onChange={onChangeInput}
                       value={form.fullname}
                />
             </div>
            <div>
                <input  className="input" name="phone_number" 
                       placeholder="Phone Number" 
                       onChange={onChangeInput} 
                       value={form.phone_number}
                />
            </div>
            <div className="addButton" >
                <button >Add</button> 
            </div>
        </form>
    )
}

export default Form
