export function SignUpPage() {
  return (
    <section className="auth-form content-grid">
      <div className="auth-form__content">
        <h1>Join Memobanking</h1>
        <p>Sign up for free!</p>
      <form>
        <div className="auth-form__user-input">
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
        </div>
        <button className="auth-form__button">Create account</button>
      </form>
      </div>
    </section>
  );
}
