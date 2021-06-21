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
    <<div className="cont" class= "md:p-10 md:m-5 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      <div className="img-cont" class="inline-block" >
        <img src={user.picture.large} alt="some man"  class="object-contain h-48 w-full" />
      </div>
      <div className="details" class="absolute inline-block md:p-5 text-lg ">
        <h4>Name: {user.name.title + " " + user.name.first + " " + user.name.last}</h4>
        <p>Age: {user.dob.age}</p>
        <p>Username: {user.login.username}</p>
        <button class="focus:outline-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>{
            this.setState((prevState)=>({
              showEmail: !prevState.showEmail
            }))
        }}>{showEmail ? "hide email" : "click to see email"}</button>
        {showEmail ? <p>email:{user.email}</p> : null}
      </div>
    </div>
  )}
}


export default ContactCard
