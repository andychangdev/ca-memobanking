export function LoginPage() {
    return (
      <section className="auth-form content-grid">
        <div className="auth-form__content">
          <h1>Welcome Back!</h1>
          <p>Login to your Memobank.</p>
        <form>
          <div className="auth-form__user-input">
            <input placeholder="Email or username" type="text" />
            <input placeholder="Password" type="password" />
          </div>
          <button className="auth-form__button">Continue</button>
        </form>
        </div>
      </section>
    );
  }
  