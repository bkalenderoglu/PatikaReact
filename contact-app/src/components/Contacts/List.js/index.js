import { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        // Object keys ==> fullname, phone_number
        return Object.keys(item).some((key) => 
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase())
        );
    });

    console.log(filtered);
    return (
        <div>
            <input placeholder="Search contact.." value={filterText} onChange={(event) => setFilterText(event.target.value)} />
            <ul className="list"> 
                {
                    filtered.map((contact, i) => (
                        <li key={i}><span>{contact.fullname}</span>
                        <span>{contact.phone_number}</span>
                        
                        </li>

                ))}
            </ul>

            <p>Total contacts ({filtered.length})</p>
        </div>
    )
}

export default List
