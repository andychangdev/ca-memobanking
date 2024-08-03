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


  const handleInputChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case "username":
        setUsername(value);
        setUsernameError(validateUsername(value));
        break;
      case "firstname":
        setFirstname(value);
        setFirstnameError(validateGivenName(value, "Firstname"));
        break;
      case "lastname":
        setLastname(value);
        setLastnameError(validateGivenName(value, "Lastname"));
        break;
      case "password":
        setPassword(value);
        setPasswordError(validatePassword(value));
        break;
      default:
        break;
    }
  };


  return (
    <section className="auth-page content-grid">
      <div className="auth-page__content">
        <h1>Join Memobanking</h1>
        <p>Sign up for free!</p>

        <form className="auth-form" onSubmit={handleSignUp}>
          <div className="auth-form__user-input">
            <label htmlFor="username">Username</label>
            <input id="username" className={`${usernameError ? "auth-form__input--error" : ""}`} placeholder="Choose a unique username" type="text" value={username} onChange={handleInputChange} />
            {usernameError ? <p className="auth-form__error">{usernameError}</p> : null}

            <label htmlFor="firstname">Firstname</label>
            <input id="firstname" className={`${firstnameError ? "auth-form__input--error" : ""}`} placeholder="Enter your first name" type="text" value={firstname} onChange={handleInputChange}/>
            {firstnameError ? <p className="auth-form__error">{firstnameError}</p> : null}

            <label htmlFor="lastname">Lastname</label>
            <input id="lastname" className={`${lastnameError ? "auth-form__input--error" : ""}`} placeholder="Enter your last name" type="text" value={lastname} onChange={handleInputChange}/>
            {lastnameError ? <p className="auth-form__error">{lastnameError}</p> : null}

            <label htmlFor="password">Password</label>
            <input id="password" className={`${passwordError ? "auth-form__input--error" : ""}`} placeholder="Create a secure password" type="password" value={password} onChange={handleInputChange}/>
            {passwordError ? <p className="auth-form__error">{passwordError}</p> : null}
          </div>

          <button type="submit" className={`auth-form__button ${!isFormValid || isFormEmpty ? "auth-form__button--disabled" : ""}`} disabled={!isFormValid || isFormEmpty}>Create account</button>
        </form>

        <p className="auth-form__redirect">Already have an account? {" "}
            <Link to="/login"> Log In</Link>
        </p>
      </div>
    </section>
  );
}
