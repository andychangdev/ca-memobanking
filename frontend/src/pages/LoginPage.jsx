export function LoginPage() {
  return (
    <section className="content-grid">
      <div className="login__content">
        <h1>Welcome Back!</h1>
        <p>Log in to your Memobank.</p>
      </div>
      <form>
        <div className="form__user-input">
          <input placeholder="Email or username" type="text" />
          <input placeholder="Password" type="password" />
        </div>
        <button className="form__button">Continue</button>
      </form>
    </section>
  );
}
