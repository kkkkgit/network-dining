import React from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";

function Register() {
    return(
        <form>
            <div className="container form">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>

                <label for="firstName"><b>First name</b></label>
                <input type="text" className="form-control mb-3 inputColor" placeholder="John" name="firstName" id="firstName" required />

                <label for="lastName"><b>Last name</b></label>
                <input type="text" className="form-control mb-3 inputColor" placeholder="Pork" name="lastName" id="lastName" required />

                <label for="email"><b>Email</b></label>
                <input type="text" className="form-control mb-3 inputColor" placeholder="Enter Email" name="email" id="email" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" className="form-control mb-3 inputColor" placeholder="Enter Password" name="psw" id="psw" required />

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" className="form-control mb-3 inputColor" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />

                <p>By creating an account you agree to our <a className="linkC" href="#">Terms & Privacy</a>.</p>
                <div className="registerButton"><button type="button" className="btn btn-primary">Register</button></div>
            </div>

            <div className="container signin">
                <p>Already have an account? <Link to="/login" className="linkC">Sign in</Link>.</p>
            </div>
        </form>
    );
}

export default Register;