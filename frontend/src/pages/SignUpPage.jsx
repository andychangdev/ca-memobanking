import { Link } from "react-router-dom";
import { useState } from "react";
import { validateUsername, validateGivenName, validatePassword } from "../utilities/inputValidationHelper";


export function SignUpPage() {

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [firstnameError, setFirstnameError] = useState(null);
  const [lastnameError, setLastnameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  
  const isFormValid = !usernameError && !firstnameError && !lastnameError && !passwordError;
  const isFormEmpty = !username || !firstname || !lastname || !password;

  const handleSignUp = async (event) => {
    event.preventDefault();

  }


  const handleUsername = (event) => {
    const userInput = event.target.value;
    setUsername(userInput);
  
    const validationError = validateUsername(userInput);
    setUsernameError(validationError);
    };


  const handleFirstname = (event) => {
    const userInput = event.target.value;
    setFirstname(userInput);
  
    const validationError = validateGivenName(userInput, "Firstname");
    setFirstnameError(validationError);
    };


  const handleLastname = (event) => {
    const userInput = event.target.value;
    setLastname(userInput);
  
    const validationError = validateGivenName(userInput, "Lastname");
    setLastnameError(validationError);
    };


  const handlePassword = (event) => {
    const userInput = event.target.value;
    setPassword(userInput);
  
    const validationError = validatePassword(userInput);
    setPasswordError(validationError);
    };


  return (
    <section className="auth-page content-grid">
      <div className="auth-page__content">
        <h1>Join Memobanking</h1>
        <p>Sign up for free!</p>

        <form className="auth-form" onSubmit={handleSignUp}>
          <div className="auth-form__user-input">
            <label>Username</label>
            <input className={`${usernameError ? "auth-form__input--error" : ""}`} placeholder="Choose a unique username" type="text" value={username} onChange={handleUsername} />
            {usernameError ? <p className="auth-form__error">{usernameError}</p> : null}

            <label>Firstname</label>
            <input className={`${firstnameError ? "auth-form__input--error" : ""}`} placeholder="Enter your first name" type="text" value={firstname} onChange={handleFirstname}/>
            {firstnameError ? <p className="auth-form__error">{firstnameError}</p> : null}

            <label>Lastname</label>
            <input className={`${lastnameError ? "auth-form__input--error" : ""}`} placeholder="Enter your last name" type="text" value={lastname} onChange={handleLastname}/>
            {lastnameError ? <p className="auth-form__error">{lastnameError}</p> : null}

            <label>Password</label>
            <input className={`${passwordError ? "auth-form__input--error" : ""}`} placeholder="Create a secure password" type="password" value={password} onChange={handlePassword}/>
            {passwordError ? <p className="auth-form__error">{passwordError}</p> : null}
          </div>

          <button type="submit" className={`auth-form__button ${!isFormValid || isFormEmpty ? "auth-form__button--disabled" : ""}`} disabled={!isFormValid}>Create account</button>
        </form>

        <p className="auth-form__redirect">Already have an account? {" "}
            <Link to="/login"> Log In</Link>
        </p>
      </div>
    </section>
  );
}
