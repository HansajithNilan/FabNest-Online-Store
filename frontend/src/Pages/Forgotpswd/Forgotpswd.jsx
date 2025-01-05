import React from 'react'
import './Forgotpswd.css'
import NavBar from '../../Components/NavBar/NavBar'

function Forgotpswd() {
  return (
    <div className='wrapper'>
      <NavBar/>
      <div className='containtpwd'>
        <div>
         <h1>Set a new password</h1>
         <p>Create a new password. Ensure it differs from previous ones for security</p>
        </div>
        <form>
                    <label>Password</label><br/>
                    <input type='password' placeholder='Enter your new password'></input><br/>
                    <label>Confirm Password</label><br/>
                    <input type='password' placeholder='Re-enter password'></input><br/>
                    <button>Update password</button><br/>
        </form>
      </div>
    </div>
  )
}

export default Forgotpswd