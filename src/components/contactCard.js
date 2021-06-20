import React, { Component } from 'react'

 class ContactCard extends Component {
   constructor(props){
     super(props)
     this.state = {
       showEmail: false
     }
   }
 render(){
   const { user } = this.props
   const { showEmail } = this.state
  return (
    <div class="md:container md:mx-auto">
      <div className="img-cont">
        <img src={user.picture.medium} alt="some man" />
      </div>
      <div className="details" class="float-right container mx-auto px-4">
        <h4>Name: {user.name.title + " " + user.name.first + " " + user.name.last}</h4>
        <p>Age: {user.dob.age}</p>
        <p>Username: {user.login.username}</p>
        <button onClick={()=>{
            this.setState((prevState)=>({
              showEmail: !prevState.showEmail
            }))
        }}>{showEmail ? "hide email" : "click to see email"}</button>
        {showEmail ? <p>email:{user.email}</p> : null}
      </div>
    </div>
  )}
}


export default ContactCar
