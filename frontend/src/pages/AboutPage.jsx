import { BaseHeader, Footer } from "../components";
import appAboutImg from "../assets/images/app_about.svg";


export function AboutPage() {
  
  return (
    <main>
      <BaseHeader btnColour="btn-purple" />
      <section className="about-us content-grid">
        <div className="grid-container">
          <img className="grid-container__image" src={appAboutImg}></img>
          <div className="about-us__content card-container">
            <div>
              <h1>About Us</h1>
              <p>At Memobanking, we understand the importance of mental health in today's world. Our mission is to provide young people with a practical and engaging way to track their emotions, promoting self-awareness and emotional regulation.</p>
            </div>
            <div>
              <h2>Our Vision</h2>
              <p>We believe in a world where mental health is prioritized and understood. By offering personalised insights and the ability to share experiences, Memobanking not only aids individual users but also fosters a broader conversation about mental health, promoting understanding and support within the community.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
