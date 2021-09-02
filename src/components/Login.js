import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const history = useHistory()
    
    const [user] = useState([
        {
            email: 'kelompok1@gmail.com',
            password: 'kelompok1',
        },
        {
            email: 'bagas@kelompok1.com',
            password: 'temanggung98',
        },
        {
            email: 'moly@kelompok1.com',
            password: 'palembang92',
        },
        {
            email: 'aldi@kelompok1.com',
            password: 'bandung95',
        }
    ]);

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

        if(dataLogin.email === user[[['0']]].email){
            if(dataLogin.password === user[[['0']]].password){
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
