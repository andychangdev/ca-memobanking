import { Link } from "react-router-dom";

export function SignUpPage() {
  return (
    <section className="auth-page content-grid">
      <div className="auth-page__content">
        <h1>Join Memobanking</h1>
        <p>Sign up for free!</p>
        <form className="auth-form">
          <div className="auth-form__user-input">
            <label htmlFor="username">Username</label>
            <input id="username" placeholder="Choose a unique username" type="text" />

            <label htmlFor="firstname">Firstname</label>
            <input id="firstname" placeholder="Enter your first name" type="text" />

            <label htmlFor="lastname">Lastname</label>
            <input id="lastname" placeholder="Enter your last name" type="text" />

            <label htmlFor="password">Password</label>
            <input id="password" placeholder="Create a secure password" type="password" />
          </div>
          <button className="auth-form__button">Create account</button>
        </form>
        <p className="auth-form__redirect">Already have an account? {" "}
            <Link to="/login"> Log In</Link>
        </p>
      </div>
    </section>
  );
}
