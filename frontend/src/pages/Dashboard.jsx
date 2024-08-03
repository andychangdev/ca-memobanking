import { DashboardHeader } from "../components";
import { MdOutlineAddReaction } from "react-icons/md"

export function Dashboard() {
    return (
        <main>
            <DashboardHeader/>
            <section className="dashboard content-grid">
                <div className="dashboard__container">
                    <div className="dashboard__content">
                        <h1>Dashboard</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quasi blanditiis quibusdam hic neque. Earum sed itaque nemo, maxime harum maiores dignissimos fugiat dolores adipisci fuga sequi similique reprehenderit?</p>
                    </div>
                    <div className="dashboard__content">
                        <h1>Dashboard</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quasi blanditiis quibusdam hic neque. Earum sed itaque nemo, maxime harum maiores aut dignissimos fugiat dolores adipisci fuga sequi similique reprehenderit?</p>
                    </div>
                </div>

                <button className="dashboard__add-btn" onClick={() => {} }><MdOutlineAddReaction className="dashboard__add-icon" /></button>
            </section>
        </main>
    )
}