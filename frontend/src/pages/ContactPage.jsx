import { BaseHeader, Footer } from "../components";
import appJoinImg from "../assets/images/app_contact.svg";

export function ContactPage() {
  return (
    <main>
      <BaseHeader btnColour="btn-red" />
      <section className="content-grid">
        <div className="grid-container">
          <img className="grid-container__image" src={appJoinImg}></img>
          <div className="contact-us__content card-container">
            <div>
              <h1>Contact Us</h1>
              <p>
                We'd love to hear from you! Whether you have questions,
                feedback, or need support, feel free to reach out to us.
              </p>
              <p>
                <b>Email:</b> support@memobanking.com
              </p>
              <p>
                <b>Phone:</b> +61 1234 1234
              </p>
            </div>
            <div>
              <p>Follow us on social media for updates and more</p>
              <p>
                <b>Twitter:</b> @Memobanking
              </p>
              <p>
                <b>Facebook: </b>Memobanking
              </p>
              <p>
                <b>Instagram:</b> @MemobankingApp
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
