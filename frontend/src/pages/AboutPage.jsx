import { BaseHeader, Footer } from "../components";

export function AboutPage() {
    return (
        <main>
            <BaseHeader/>
            <section className="content-grid">
                <div className="card">
                    <h2>About Us</h2>
                    <p>At Memobanking, we understand the importance of mental health in today's world. Our mission is to provide young people with a practical and engaging way to track their emotions, promoting self-awareness and emotional regulation.</p>
                </div>
                <div className="card">
                    <h2>Our Vision</h2>
                    <p>We believe in a world where mental health is prioritized and understood. By offering personalised insights and the ability to share experiences, Memobanking not only aids individual users but also fosters a broader conversation about mental health, promoting understanding and support within the community.</p>
                </div>
                <div className="card">
                    <h2>Our Team</h2>
                    <p>Our team is passionate about mental health and technology. We have combined our expertise to create a platform that is both user-friendly and impactful. Together, we are dedicated to helping you navigate your emotional landscape and achieve mental wellness.</p>
                </div>
            </section>
            <Footer/>
        </main>
    )
}