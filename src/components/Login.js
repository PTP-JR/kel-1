import { useState } from 'react';
import { useHistory } from 'react-router-dom';


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

    return (
        <div className="kotak-masuk">
            <h1>Login</h1>
            <form>
                <h1>Masuk Akun Anda</h1>

                <label htmlFor="" className="label-left">Alamat Email</label><br />
                <input 
                    type="email" 
                    name="email" 
                    id="" 
                    value={dataLogin.email}
                    onChange={handleChange}
                /><br />

                <label htmlFor="" className="label-left">Kata Sandi</label><br />
                <input 
                    type="password" 
                    name="password" 
                    id="" 
                    value={dataLogin.password}
                    onChange={handleChange}
                /><br />

                <button onClick={handleSubmit}>Masuk</button>
            </form>
        </div>
    )
}

export default Login;
