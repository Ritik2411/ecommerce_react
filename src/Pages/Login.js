import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { auth } from '../firebase'
import "./Login.css"

function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const history = useHistory()

    const signin = (e) => {
        e.preventDefault()
        //Firebase Login
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            history.push("/")
        }).catch((err)=>{
            alert(err)
        })
    }

    const register = () => {
        //Firebase Register
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                history.push("/")
                console.log(auth)
            }
        }).catch((err)=>{
            alert(err)
        })
    }
    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" className="login_img"/>            

            <div className="login_container">
                <h1 style={{marginBottom:"10px"}}>
                    Sign-in
                </h1>
                <hr style={{marginBottom:'5px'}}/>
                <form>
                    <div>
                        <h5>Email</h5>
                        <input type="text" 
                            className="login_input"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <h5>Password</h5>
                        <input type="password" 
                            className="login_input"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </div>
                    
                    <button className="signin_button" onClick={signin}>Sign-In</button>
                </form>

                <hr/>

                <button className="create_account_button" onClick={register}>Create An Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
