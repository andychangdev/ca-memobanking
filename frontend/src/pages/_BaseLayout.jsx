import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";


export function BaseLayout() {
    return (
        <main>
        <Header />
        <Outlet />
        <Footer />
        </main>
    )
}