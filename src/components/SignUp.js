import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
    const history = useHistory();

    const [signUp, setSignUp] = useState(
        {
            firstname:"",
            lastname:"", 
            username:"", 
            email:"", 
            password:"",
            confirmedPassword:""
        });

    const handleChangesignUp = (event) => {
            setSignUp({
                ...signUp,
                [event.target.name]: event.target.value,
            }
        )
    };

    const handleSubmitsignUp = (event) => {
        event.preventDefault();
        localStorage.setItem("ListData", JSON.stringify(signUp));
        console.log(signUp);
        alert(`
            Your Data is \n 
            First Name: ${signUp.firstname} \n 
            Last Name: ${signUp.firstname} \n 
            Username: ${signUp.username} \n 
            Email: ${signUp.email}` 
        )
        history.push("/login");
    }

    function validSignUp(){
        return (
            signUp.firstname.length > 0 && 
            signUp.firstname.length > 0 &&
            signUp.username.length > 0 && 
            signUp.email.length > 0 && 
            signUp.password.length > 0 )
    }

    return (
        <div className="sign-up-form">
            
            <form className="form-signup">
                <div className="judul-tengah">
                    <h2>Welcome to The Movies</h2>
                    <p>Registration Your Account</p>
                </div>
                <div className="label-left">
                    <label htmlFor="">First Name:</label><br />
                    <input 
                        type="text" 
                        name="firstname" 
                        id="" 
                        value={signUp.firstname}
                        onChange={handleChangesignUp}
                    /><br />

                    <label htmlFor="">Last Name:</label><br />
                    <input 
                        type="text" 
                        name="lastname" 
                        id="" 
                        value={signUp.lastname}
                        onChange={handleChangesignUp}
                    /><br />

                    <label htmlFor="">Username:</label><br />
                    <input 
                        type="text" 
                        name="username" 
                        id="" 
                        value={signUp.username}
                        onChange={handleChangesignUp}
                    /><br />

                    <label htmlFor="">Address Email:</label><br />
                    <input 
                        type="email" 
                        name="email" 
                        id="" 
                        value={signUp.email}
                        onChange={handleChangesignUp}
                    /><br />

                    <label htmlFor="">Password:</label><br />
                    <input 
                        type="password" 
                        name="password" 
                        id="" 
                        value={signUp.password}
                        onChange={handleChangesignUp}
                    /><br />

                    <label htmlFor="">Confirmed Password:</label><br />
                    <input 
                        type="password" 
                        name="confirmedPassword" 
                        id="" 
                        value={signUp.confirmedPassword}
                        onChange={handleChangesignUp}
                    /><br />
                </div>

                <button 
                    onClick={handleSubmitsignUp} 
                    className="btn-signup" 
                    disabled={!validSignUp}
                >Sign Up</button>
                
                <div className="sign-up-here">
                    <p>Already have an account? <Link to="/login" id="link">Log in here</Link></p>
                </div>
            </form>

        </div>
    )
}

export default SignUp;
