import React,{useState,useContext} from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/Context';
import './Signup.css';
import {Link, useHistory} from 'react-router-dom'

export default function Signup() {
  const history = useHistory()
  const [userName,setUserName] =useState('')
  const [email,setEmail]= useState('')
  const [phone,setPhone]= useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit =(e)=>{
e.preventDefault()
firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
  result.user.updateProfile({displayName:userName}).then(()=>{
    firebase.firestore().collection('users').add({
      id:result.user.uid,
      userName:userName,
      phone:phone
    }).then(()=>{
history.push('/login')
    })
  })
})
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
          value={userName}
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            onChange={(e)=>setUserName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
          value={email}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
          value={phone}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
          value={password}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
       <Link to={'/login'}>Login</Link>
      </div>
    </div>
  );
}
