import { BaseHeader, Footer } from "../components";

export function HomePage() {
    return (
        <main>
            <BaseHeader/>
            <section className="content-grid">
                <div className="hero">
                    <h2>Discover Your Emotional Landscape </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quasi blanditiis quibusdam hic neque. Earum sed itaque nemo, maxime harum maiores aut dignissimos fugiat dolores adipisci fuga sequi similique reprehenderit?</p>
                </div>
                <div className="card">
                    <h2>The Growing Mental Health Crisis</h2>
                    <p>In today's fast-paced, digital world, mental health is more crucial than ever. Young people, in particular, are facing unprecedented levels of stress, anxiety, and depression. The pressures of social media, academic demands, and societal expectations have contributed to a growing mental health crisis among the youth.</p>
                </div>

                <div className="card">
                    <p><b>Track your emotions, not just feelings.</b> Select your emotion, add a brief note if desired, and log it with ease. No complicated steps or overwhelming options.</p>
                </div>
                <div className="card">
                    <p><b>A range of features you’ll find useful.</b> Log emotions, view history, analyze trends with graphs, and share your journey with others. Everything you need to understand your emotional patterns.</p>
                </div>
                <div className="card">
                    <p><b>Accessible anytime, anywhere.</b> Use Memobanking on your mobile, tablet, or desktop. Enhance your self-awareness, boost mental health, and stay connected with your emotional wellbeing.</p>
                </div>
                <div className="card">
                    <h2>How Memobanking Helps </h2>
                    <p>Memobanking is here to help. By providing a structured way to track and understand your emotions, Memobanking aims to be a proactive platform in addressing these issues. Our app offers valuable tools to navigate and understand your emotional landscape, whether for personal growth or mental health management.</p>
                </div>
                <div className="card">
                    <h2>Ready to start your journey?</h2>
                    <p>Join us on a journey to self-awareness and emotional regulation. Start logging your emotions today and take the first step towards a healthier, happier you.</p>
                </div>
            </section>
            <Footer/>
        </main>
    )
}