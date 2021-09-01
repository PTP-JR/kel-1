import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const history = useHistory()
    
    const [user, setUser] = useState({
        email: 'kelompok1@gmail.com',
        password: 'kelompok1'
    })

    const [dataLogin, setDataLogin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setDataLogin({
            ...dataLogin,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(dataLogin);

        if(dataLogin.email === user.email){
            if(dataLogin.password === user.password){
                history.push("/listData")
            }
        } else {
            alert("Email dan Password Anda Salah")
        } 
    }

    function validLogin(){
        return (dataLogin.password.length > 0 && dataLogin.email.length > 0)
    }

    return (
        <div className="login-page">
                
        <div className="kotak-masuk">
            <div className="login-desc">
            <h2>Welcome to The Movies</h2>
            <p>Login to Your Account</p>
            </div>
            <form>
                <div className="label-left">
                    <label >Email Address:</label><br />
                    <input 
                        type="email" 
                        name="email" 
                        id="" 
                        value={dataLogin.email}
                        onChange={handleChange}
                    /><br />

                    <label htmlFor="" >Password:</label><br />
                    <input 
                        type="password" 
                        name="password" 
                        value={dataLogin.password}
                        onChange={handleChange}
                    /><br />
                </div>
               
                <button onClick={handleSubmit} disabled={!validLogin()} className="btn-login">Enter</button>
                <p>New User? <Link to="/sign-up">Sign Up</Link></p>
            </form>
        </div>
        </div>
    )
}

export default Login;
