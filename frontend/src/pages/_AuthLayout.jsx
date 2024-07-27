import { Outlet } from "react-router-dom";
import { AuthHeader, Footer } from "../components";


export function AuthLayout() {
    return (
        <main>
        <AuthHeader />
        <Outlet />
        <Footer />
        </main>
    )
}