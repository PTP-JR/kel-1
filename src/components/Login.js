import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Login.css";

function Login() {

const history = useHistory();

  const [user, setUser] = useState([
    {
      email: "user@kelompok1.com",
      password: "1234",
    },
    {
      email: "bagas",
      password: "123",
    },
    {
      email: "aldi",
      password: "456",
    },
    {
      email: "moly@kelompok1.com",
      password: "palembang92",
    },
  ]);

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  console.log(dataLogin.email);

  const handleChange = (event) => {
    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataLogin);

    for (let person of user) {
      console.log(person);

      if (
        dataLogin.email === person.email &&
        dataLogin.password === person.password
      ) {
        return history.push("/listData");
      }
    }
      alert("Username and Password is invalid, try again.");
  };

  function validLogin() {
    return dataLogin.password.length > 0 && dataLogin.email.length > 0;
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
            <label>Email Address:</label>
            <br />
            <input
              type="email"
              name="email"
              id=""
              value={dataLogin.email}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={dataLogin.password}
              onChange={handleChange}
            />
            <br />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!validLogin()}
            className="btn-login"
          >
            Enter
          </button>
          <p>
            New User? <Link to="/sign-up">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
