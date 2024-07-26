import { Outlet } from "react-router-dom";
import { MainNav } from "../components/MainNav";


export function BaseLayout() {
    return (
        <main>
        <MainNav />
        <Outlet />
        </main>
    )
}