import React from 'react'
import {auth} from "../Firebase"


const style = {
    btn: `bg-pink-500 px-4 py-2 hover:bg-pink-400 rounded-full text-sm text-white`
}

const LogOut = () => {

    const signOut = () =>{
        signOut(auth);
    }
  return (
    <div>
        <button onClick={() => auth.signOut()} className={style.btn}>Logout</button>
    </div>
  )
}

export default LogOut