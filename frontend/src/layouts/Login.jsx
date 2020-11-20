import React, { useContext, useState } from 'react'
import "layouts/Login.css"
import image from 'assets/img/login-background.png'
import { CONFIG } from "configSys"
import { GlobalContext } from "../context/GlobalState"
import { login } from "../api/index"

const Login = (props) => {

    // const { setUser } = useContext(GlobalContext)
    const [user, setUser] = useState(" ");
    const [password, setPassword] = useState(" ");
    let link_login = `${CONFIG.IP_BACK_END}/login`
    let handleLogin = async (e) => {
        e.preventDefault();
        let data = await login({ user, password });
        if (data.user) return props.history.push("/admin/theodoichat")
        return alert("Sai user hoac password")

    }
    return (
        <div class="w3l-workinghny-form">
            <div class="workinghny-form-grid">
                <div class="wrapper">
                    <div class="logo">
                        <h1><a class="brand-logo" href="index.html">Sign In</a></h1>
                    </div>
                    <div class="workinghny-block-grid">
                        <div class="workinghny-left-img align-end">
                            <img src={image} class="img-responsive" alt="img" />
                        </div>
                        <div class="form-right-inf">
                            <div class="login-form-content">
                                <h2>Where to?</h2>
                                <form action={link_login} class="signin-form" method="post">
                                    <div class="one-frm">
                                        <label>User</label>
                                        <input onChange={(e) => { setUser(e.target.value) }} type="text" name="user" placeholder="" required="" />
                                    </div>
                                    <div class="one-frm">
                                        <label>Password</label>
                                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" placeholder="" required="" />
                                    </div>
                                    <label class="check-remaind">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                        <p class="remember">Remember Me</p>

                                    </label>
                                    <button class="btn btn-style mt-3" onClick={(e) => { handleLogin(e) }}>Sign In </button>
                                    <p class="already">Don't have an account? <a href="#signin">Sign Up</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;