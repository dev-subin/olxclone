import React,{useContext,useState} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import {useHistory}from 'react-router-dom'
import Login from '../Login/Login';
function Header() {
  const history =useHistory()
  const {user}= useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  const [isActive,setIsActive] = useState(false)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
       <div className="dropdown">
         <div className="dropdown_btn" onClick={(e)=>{
setIsActive(!isActive)
         }}>ENGLISH
         <Arrow></Arrow>
         </div>
        {
          isActive && (
            <div className="dropdown_content">
            <div className="dropdown_item">HINDI</div>
          </div>
          )
        }
       </div>
        <div className="loginPage">
          <span style={{color:'red',cursor:'pointer'}}onClick={()=>{
            history.push('/login')
          }}>{user ?`Welcome ${ user.displayName}` : 'Login'}</span>
          <hr />
        </div>
        <div className="logoutPage">
         {user&& <span style={{cursor:'pointer'}} onClick={()=>{
           firebase.auth().signOut();
           history.push('/login')
         }}>Logout</span>}
          <hr />
        </div>

        <div className="sellMenu" onClick={()=>{
              history.push('/create')
            }}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
