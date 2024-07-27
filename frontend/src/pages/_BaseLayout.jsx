import { Outlet } from "react-router-dom";
import { BaseHeader, Footer } from "../components";


export function BaseLayout() {
    return (
        <main>
        <BaseHeader />
        <Outlet />
        <Footer />
        </main>
    )
}