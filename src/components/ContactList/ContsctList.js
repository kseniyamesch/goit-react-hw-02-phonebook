import React from "react";

export default function ContactList ({contacts}) {
    
        return (
            <ul>
{contacts.map(contact => {
      return  <li key={contact.id}>
<span>{contact.name}:</span>
<span>{contact.number}</span>
        </li>
    
})}
            </ul>
        )
}