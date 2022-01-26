import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../Store/Context'
import { useContext } from 'react';
import {useHistory} from 'react-router-dom'
const Create = () => {
  const history =useHistory()
  const {firebase}=useContext(FirebaseContext)
  const {user}= useContext(AuthContext)
  const [name,setName] =useState('')
  const [category,setCategory] =useState('')
  const [price,setPrice] =useState('')
  const [image,setImage]=useState('')
  const date =new Date()
  const handleSubmit = (e)=>{
    e.preventDefault()
firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
  ref.getDownloadURL().then((url)=>{
    console.log(url)
    firebase.firestore().collection('products').add({
      name,
      category,
      price,
      url,
      userId:user.uid,
      createdAt:date.toDateString()
    })
    history.push('/')
  })
})
  }
  const handleCreate=(e)=>{
e.preventDefault()
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form onSubmit={handleCreate}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
            value={name}
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              onChange={(e)=>{
setName(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
            value={category}
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              onChange={(e)=>{
setCategory(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input value={price} className="input" type="number" id="fname" name="Price" onChange={(e)=>{
setPrice(e.target.value)
            }}/>
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image): ''}></img>
          <form onSubmit={handleSubmit}>
            <br />
            <input onChange={(e)=>{
setImage(e.target.files[0])       
   }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
