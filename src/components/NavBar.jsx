import React from 'react'
import {auth} from "../Firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import LogIn from './LogIn'
import LogOut from './LogOut'
import logo from "../images/unic.jpg"



const style = {
    container: `bg-white border-gray-500 h-20 flex justify-between items-center p-4 rounded-tr-3xl rounded-tl-3xl border-8`,
    naslov: ` text-purple-700 text-2xl  hover:text-pink-300`
    
}

const NavBar = () => {
  const [user] = useAuthState(auth);
   console.log(user); 
  return (
    <div className={style.glavni}>
    <div className={style.container}>
      <img src={logo} alt="logo" />
        <h1 className={style.naslov}>Unicorns&Errors chat app</h1>
        {user ? <LogOut/> : <LogIn/>} 
       

    </div>
    </div>
  )
}

export default NavBar