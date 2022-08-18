import React from 'react'
import {auth} from "../Firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import LogIn from './LogIn'
import LogOut from './LogOut'



const style = {
    container: `bg-gray-800 h-20 flex justify-between items-center p-4 rounded-tr-3xl rounded-tl-3xl`,
    naslov: `text-white text-2xl`
}

const NavBar = () => {
  const [user] = useAuthState(auth);
   console.log(user); 
  return (
    <div className={style.container}>
        <h1 className={style.naslov}>Chat App</h1>
        {user ? <LogOut/> : <LogIn/>} 
       

    </div>
  )
}

export default NavBar