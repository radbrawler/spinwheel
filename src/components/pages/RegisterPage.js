import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import '../../App.css'

export default function SignUpPage() {

    const navigate = useHistory();

    function handleSubmit(e) {
        let uname = e.target.form[0].value
        let email = e.target.form[1].value
        let pass = e.target.form[2].value
        let store = localStorage.setItem(email, pass)
        console.log("register", uname, email, pass)
        navigate.push("/home")
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={handleSubmit}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
