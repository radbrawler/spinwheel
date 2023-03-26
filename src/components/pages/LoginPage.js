import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";


import '../../App.css'

export default function SignInPage() {

    const navigate = useHistory();

    function formSubmit(e) {
        e.preventDefault();
        let uname = e.target.form[0].value
        let pass = e.target.form[1].value
        let store = localStorage.getItem(uname)
        console.log("home route", store)
        navigate.push("/home")
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={formSubmit}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
