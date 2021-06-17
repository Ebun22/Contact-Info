import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Contact from './components/Contacts';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Contact />
      </div>
    )}
  }

//import React, { useState, useEffect } from 'react';

//  // function App() {
//   const[contact, setContact] = useState([]);
//
//   function contacts(){
//     fetch("https://randomuser.me/api/?results=3")
//     .then(result => result.json())
//     .then(data => setContact(data.results))
//     .catch(error => console.log(error))
//   }
// contacts()
//
//         return (
//         <div className="App">
//         {contact.map((datas) => {
//           <div className="contacts">
//             <img src={datas.picture}/>
//             <p>{datas.email}</p>
//           </div>
//         })}
//         </div>
//       );
//
//
// }

export default App;
