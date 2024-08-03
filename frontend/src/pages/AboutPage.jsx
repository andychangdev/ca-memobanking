import { BaseHeader, Footer } from "../components";

export function AboutPage() {
    return (
        <main>
            <BaseHeader/>
            <section className="content-grid">
                <h1>About Page</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quasi blanditiis quibusdam hic neque. Earum sed itaque nemo, maxime harum maiores aut dignissimos fugiat dolores adipisci fuga sequi similique reprehenderit?</p>
            </section>
            <Footer/>
        </main>
    )
}