import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <section className="auth-page content-grid">
      <div className="auth-page__content">
        <h1>Welcome Back!</h1>
        <p>Login to your Memobank.</p>
        <form className="auth-form">
          <div className="auth-form__user-input">
            <label htmlFor="username">Username</label>
            <input id="username" placeholder="Enter your username" type="text"/>

            <label htmlFor="password">Password</label>
            <input id="password" placeholder="Enter your password" type="password"/>
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
