import React, { Component } from 'react'
import axios from 'axios'
import ContactCard from './contactCard';

class Contact extends Component{
  constructor(props){
    super(props)
    this.state = {
      contacts: []
    }
  }
  componentDidMount(){
    axios.get("https://randomuser.me/api/?results=3")
  .then(response=>{
    console.log(response.data.results)
    this.setState(
      {contacts:response.data.results}
    )
  })
    .catch(error=>console.log(error))
  }

  render(){
    const { contacts } = this.state
    return (
    <div>
      {
        contacts.length ? contacts.map(user => {
        return <ContactCard user={user} key={user.cell} />
      }) :
        <div>LOADING...</div>
      }
    </div>
    );
  }

}

export default Contact
