import React, { Component } from 'react'
import axios from 'axios'

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
    var showEmail = false
    console.log(contacts.cell)
    return (
    <div>
      {
        contacts.length ? contacts.map(user => {
        return(
          <div key={user.cell}>
            <div className="img-cont">
              <img src={user.picture.medium} alt="some man" />
            </div>
            <div className="details">
              <h4>Name: {user.name.title + " " + user.name.first + " " + user.name.last}</h4>
              <p>Age: {user.dob.age}</p>
              <p>Username: {user.login.username}</p>
              <button onClick={(e,index)=>{
                  this.showEmail = true;
              }}>click to see email</button>
              {showEmail ? <p>email:{user.email}</p> : null}
            </div>
          </div>
        )
      }) :
        <div>LOADING...</div>
      }
    </div>
    );
  }

}

export default Contact
