import { Outlet } from "react-router-dom";
import { Header } from "../components";


export function BaseLayout() {
    return (
        <main>
        <Header />
        <Outlet />
        </main>
    )
}