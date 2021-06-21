import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Contact from './components/Contacts';

 class App extends Component {
 render(){
  return (
   <div className="App"  class="p-6 items-center justify-center">
    <h1 class="text-blue-400 font-extrabold text-center text-4xl md:pb-2">Hello World!</h1>
        <p class="tracking-widest text-center text-xl md:pb-6">This is my first React App.</p>
      <Contact class="md:container md:mx-auto" />
    </div>
  )}
}

export default App;
