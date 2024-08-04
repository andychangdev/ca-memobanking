import { useEffect, useState } from "react";
import { DashboardHeader } from "../components";
import { MdOutlineAddReaction } from "react-icons/md"
import api from "../utilities/apiClient";
import { useNavigate } from "react-router-dom";

export function Dashboard() {

    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();


    const getUserData = async () => {
        try {
            const response = await api.get("/users/data");
            if (response.data && response.data.user) {
                setUserData(response.data.user)
            }
        } catch (error) {
            if (error.response.status === 401) {
                localStorage.clear();
                navigate("/");
            } else {
                console.error("An unexpected error occurred while fetching user data:", error);
            }
        }
    };

    useEffect(() => {
      getUserData()
      return () => {}
    }, []);

    if (!userData) {
        return (
            <main>
                <DashboardHeader/>
                <section className="dashboard content-grid">
                    <div className="dashboard__container">
                        <div className="dashboard__content">
                            <h1>Loading...</h1>
                        </div>
                    </div>
                </section>
            </main>
        );
    }    

    return (
        <main>
            <DashboardHeader/>
            <section className="dashboard content-grid">
                <div className="dashboard__container">
                    <div className="dashboard__content">
                        <h1>Hi {userData.username}</h1>
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