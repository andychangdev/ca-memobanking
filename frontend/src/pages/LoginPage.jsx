import { Link } from "react-router-dom";
import { useState } from "react";

export function LoginPage() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case "username":
        setUsername(value);
        if (!value) {
          setUsernameError("Username is required");
        } else {
          setUsernameError("")
        }
        break;
      case "password":
        setPassword(value);
        if (!value) {
          setPasswordError("Password is required");
        } else {
          setPasswordError("")
        }
        break;
      default:
        break;
    }
  };


  return (
    <section className="auth-page content-grid">
      <div className="auth-page__content">
        <h1>Welcome Back!</h1>
        <p>Login to your Memobank.</p>
        <form className="auth-form">
          <div className="auth-form__user-input">
            <label htmlFor="username">Username</label>
            <input id="username" className={`${usernameError ? "auth-form__input--error" : ""}`} placeholder="Enter your username" type="text" value={username} onChange={handleInputChange}/>
            {usernameError ? <p className="auth-form__error">{usernameError}</p> : null}

            <label htmlFor="password">Password</label>
            <input id="password" className={`${passwordError ? "auth-form__input--error" : ""}`} placeholder="Enter your password" type="password" value={password} onChange={handleInputChange}/>
            {passwordError ? <p className="auth-form__error">{passwordError}</p> : null}
          </div>
          <button className="auth-form__button">Continue</button>
        </form>
        <p className="auth-form__redirect">Not registered yet? {" "}
          <Link to="/signup"> Create an account</Link>
        </p>
      </div>
    </section>
  );
}
