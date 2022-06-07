import React, { Component } from 'react';
import ContactForm from './ContactForm';

// export const App = () => {
//   return (
//     <div>

//     </div>
//   );
// };

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };


  formSubmitHandler = data => {
    console.log(data);
//     this.setState(prevState=> {
//       const contact = {
//         name: data.name,
//         id: 1,
//       }
// console.log(prevState.contacts)
// return ({...prevState}.contacts)

    // })
  };

  // this.setState(prevState => {
  //   // Если посмотреть состояние переданное callback-функции во время ее вызова,
  //   // получим актуальное состояния на момент обновления.
  //   console.log(prevState.value); // будет разный на каждой итерации

  //   return { value: prevState.value + 1 };
  // });

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>
        <h2>Contacts</h2>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}
