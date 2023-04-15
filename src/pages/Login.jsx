import React from "react";
import "../styles/login.css"
import { Link } from "react-router-dom";

function Login() {
    return(
        <form>
            <div className="container form">
                <h1>Login</h1>

                <label for="email"><b>Email</b></label>
                <input type="text" className="form-control mb-3" placeholder="Enter Email" name="email" id="email" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" className="form-control mb-3" placeholder="Enter Password" name="psw" id="psw" required />

                <div className="registerButton"><button type="button" className="btn btn-primary">Log In</button></div>
            </div>

            <div className="container signin">
                <p>Don't have an account? <Link to="/register" className="linkC">Register here</Link>.</p>
            </div>
        </form>
    );
}

export default Login;