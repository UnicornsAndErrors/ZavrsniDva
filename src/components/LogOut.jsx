import React from 'react'
import {auth} from "../Firebase"


const style = {
    btn: `bg-gray-200 px-4 py-2 hover:bg-gray-100 rounded-full text-sm`
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