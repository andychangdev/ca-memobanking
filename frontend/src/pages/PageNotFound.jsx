import { BaseHeader, Footer } from "../components";

export function PageNotFound() {
    return (
        <main>
            <BaseHeader/>
            <section className="content-grid">
                <h1>Error 404</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quasi blanditiis quibusdam hic neque. Earum sed itaque nemo, maxime harum maiores aut dignissimos fugiat dolores adipisci fuga sequi similique reprehenderit?</p>
            </section>
            <Footer/>
        </main>
    )
}