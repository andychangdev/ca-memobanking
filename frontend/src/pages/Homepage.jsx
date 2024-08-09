import { BaseHeader, Footer } from "../components";
import appMissionImg from "../assets/images/app_mission.svg";
import appBenefitsImg from "../assets/images/app_benefits.svg";
import { Link } from "react-router-dom";


export function HomePage() {
    return (
        <main>
            <BaseHeader btnColour="btn-blue"/>
            <section className="homepage content-grid">
                <div className="hp-hero">
                    <h1 className="hp-hero__title">Discover Your Emotional Landscape </h1>
                </div>
                <div className="hp-mission card-container">
                    <div className="hp-mission__content">
                        <h2>The Growing Mental Health Crisis</h2>
                        <p>In today's fast-paced, digital world, mental health is more crucial than ever. Young people, in particular, are facing unprecedented levels of stress, anxiety, and depression. The pressures of social media, academic demands, and societal expectations have contributed to a growing mental health crisis among the youth.</p>
                    </div>
                    <img className="hp-mission__image img--left" src={appMissionImg}></img>
                </div>

                <div className="hp-mission card-container">
                    <div className="hp-mission__content">
                        <h2>How Memobanking Helps </h2>
                        <p>By providing a structured way to track and understand your emotions, Memobanking aims to be a proactive platform in addressing these issues. Our app offers valuable tools to navigate and understand your emotional landscape, whether for personal growth or mental health management.</p>
                    </div>
                    <img className="hp-mission__image" src={appBenefitsImg}></img>
                </div>

                <div className="hp-features">
                    <div className="card-container">
                        <div>
                            <p><b>Track your emotions, not just feelings.</b></p>
                            <p> Select your emotion, add a brief note if desired, and log it with ease. No complicated steps or overwhelming options.</p>
                        </div>
                    </div>
                    <div className="card-container">
                        <div>
                            <p><b>A range of features you’ll find useful.</b></p>
                            <p>Log emotions, view history, analyze trends with graphs, and share your journey with others. Everything you need to understand your emotional patterns.</p>
                        </div>
                    </div>
                    <div className="card-container">
                        <div>
                            <p><b>Accessible anytime, anywhere.</b></p>
                            <p>Use Memobanking on your mobile, tablet, or desktop. Enhance your self-awareness, boost mental health, and stay connected with your emotional wellbeing.</p>
                        </div>
                    </div>
                </div>
                <div className="hp-cta card-container">
                    <div>
                        <h2>Ready to start your journey?</h2>
                        <p>Join us on a journey to self-awareness and emotional regulation. Start logging your emotions today and take the first step towards a healthier, happier you.</p>
                    </div>
                    
                    <div className="hp-cta__content">
                        <Link to="/signup" className="hp-cta__btn">Get started for free</Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}