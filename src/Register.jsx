import React from 'react'
import "./Login.css"

const Register = () => {
  return (

    // "id" : 14,
    //     "fullName" : "Trung THu",
    //     "username" : "hoangson",
    //     "email" : "2003@gmal.com",
    //     "phone" : "09454943",
    //     "address":"Hà Tây",
    <div className='login'>
        <img src="https://images.unsplash.com/photo-1615018160530-d37d31520d87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80" 
        className='login_logo'>
        </img>
        <div className='login_container_regis'>
            <h3>Login</h3>
            <form>
                <center>
                    <input placeholder='fullName'></input>
                </center>
                <center>
                    <input placeholder='username'></input>
                </center>
                <center>
                    <input placeholder='email'></input>
                </center>
                <center>
                    <input placeholder='phone'></input>
                </center>

                <center>
                    <input placeholder='address'></input>
                </center>
                <hr/>
                <center>
                    <button type='submit' className='login_signup'>
                        Sign up
                    </button>
                </center>
            </form>
        </div>
    </div>
  )
}

export default Register