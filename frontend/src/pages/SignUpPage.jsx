import { Link } from "react-router-dom";
import { useState } from "react";

export function SignUpPage() {

  
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");


  const handleSignUp = async (event) => {
    event.preventDefault();

  }


  return (
    <section className="auth-page content-grid">
      <div className="auth-page__content">
        <h1>Join Memobanking</h1>
        <p>Sign up for free!</p>

        <form className="auth-form" onSubmit={handleSignUp}>
          <div className="auth-form__user-input">
            <label>Username</label>
            <input placeholder="Choose a unique username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />

            <label>Firstname</label>
            <input placeholder="Enter your first name" type="text" value={firstname} onChange= {(event) => setFirstname(event.target.value)}/>

            <label>Lastname</label>
            <input placeholder="Enter your last name" type="text" value={lastname} onChange= {(event) => setLastname(event.target.value)}/>

            <label>Password</label>
            <input placeholder="Create a secure password" type="password" value={password} onChange= {(event) => setPassword(event.target.value)}/>
          </div>

          <button type="submit" className="auth-form__button">Create account</button>
        </form>

        <p className="auth-form__redirect">Already have an account? {" "}
            <Link to="/login"> Log In</Link>
        </p>
      </div>
    </section>
  );
}
