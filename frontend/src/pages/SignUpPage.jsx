export function SignUpPage() {
  return (
    <section className="content-grid">
      <div className="signup__content">
        <h1>Join Memobanking</h1>
        <p>Sign up for free!</p>
      </div>
      <form>
        <div className="form__user-input">
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
        </div>
        <button className="form__button">Create account</button>
      </form>
    </section>
  );
}
