import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const history = useHistory()
    
    const [user, setUser] = useState({
        email: '',
        password: ''
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
                history.push("/")
            }
        } else {
            alert("Email dan Password Anda Salah")
        } 
    }

    function validLogin(){
        return (dataLogin.password.length > 0 && dataLogin.email.length > 0)
    }

    return (
        <div className="kotak-masuk">
            <h1>Welcome to The Movies</h1>
            <form>
                <h1>Login your Account</h1>

                <div className="label-left">
                    <label htmlFor="" >Email Address</label><br />
                    <input 
                        type="email" 
                        name="email" 
                        id="" 
                        value={dataLogin.email}
                        onChange={handleChange}
                    /><br />

                    <label htmlFor="" >Password</label><br />
                    <input 
                        type="password" 
                        name="password" 
                        id="" 
                        value={dataLogin.password}
                        onChange={handleChange}
                    /><br />
                </div>
               
                <button onClick={handleSubmit} className="btn" disabled={!validLogin()}>Enter</button>

            </form>
        </div>
    )
}

export default Login;
