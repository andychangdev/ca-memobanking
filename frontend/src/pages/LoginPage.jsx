import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthHeader } from "../components";
import api from "../utilities/apiClient";

export function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [formSubmitError, setFormSubmitError] = useState(null);
  const navigate = useNavigate();

  const isFormValid = !usernameError && !passwordError;
  const isFormEmpty = !username || !password;
  

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/users/login", {
        username: username,
        password: password,
      })

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard")
      }
    } catch (error) {
      if(error.response && error.response.data && error.response.data.message) {
        setFormSubmitError(error.response.data.message);
      } else {
        setFormSubmitError("An unexpected error occurred. Please try again")
      }
    }
  }


  const handleInputChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case "username":
        setUsername(value);
        if (!value) {
          setUsernameError("Username cannot be empty");
        } else {
          setUsernameError("")
        }
        break;
      case "password":
        setPassword(value);
        if (!value) {
          setPasswordError("Password cannot be empty");
        } else {
          setPasswordError("")
        }
        break;
      default:
        break;
    }
  };
  

  return (
    <main>
      <AuthHeader/>
      <section className="auth-page content-grid">
        <div className="auth-page__content">
          <h1>Welcome Back!</h1>
          <p>Login to your Memobank.</p>
          <form className="auth-form" onSubmit={handleLogin}>
            <div className="auth-form__user-input">
              <label htmlFor="username">Username</label>
              <input id="username" className={`${usernameError ? "auth-form__input--error" : ""}`} placeholder="Enter your username" type="text" value={username} onChange={handleInputChange}/>
              {usernameError ? <p className="auth-form__error">{usernameError}</p> : null}
              <label htmlFor="password">Password</label>
              <input id="password" className={`${passwordError ? "auth-form__input--error" : ""}`} placeholder="Enter your password" type="password" value={password} onChange={handleInputChange}/>
              {passwordError ? <p className="auth-form__error">{passwordError}</p> : null}
            </div>
            <button type="submit" className={`auth-form__button ${!isFormValid || isFormEmpty ? "auth-form__button--disabled" : ""}`} disabled={!isFormValid || isFormEmpty}>Continue</button>
            {formSubmitError ? <p className="auth-form__error">{formSubmitError}</p> : null}
          </form>
          <p className="auth-form__redirect">Not registered yet? {" "}
            <Link to="/signup"> Create an account</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
