import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineAddReaction } from "react-icons/md"
import api from "../utilities/apiClient";
import { DashboardHeader, EmotionEntry } from "../components";

export function Dashboard() {

    const [userData, setUserData] = useState(null);
    const [allEntries, setAllEntries] = useState([]);
    const [filterType, setFilterType] = useState("");
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


    const getAllEntries = async () => {
        try {
            if (filterType !== "") {
                const query = filterType;
                const response = await api.get(`emotions/?type=${query}`);
                if (response.data && response.data.entries) {
                    setAllEntries(response.data.entries)
                }
            } else {
                const response = await api.get("emotions/");
                if (response.data && response.data.entries) {
                    setAllEntries(response.data.entries)
                }
            }

        } catch (error) {
            console.error("An unexpected error occurred while fetching user entries:", error);
        }
    };


    useEffect(() => {
      getUserData();
      getAllEntries();
    }, [filterType]);


    const handleFilterTypeChange = (event) => {
        setFilterType(event.target.value);
      };


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
                    <div className="dashboard__greeting">
                        <h1>Hey {userData.username}!</h1>
                        <h3>How are you feeling?</h3>
                    </div>

                    <div className="dashboard__emotion-filter">
                        <label>Filter By:</label>
                        <select onChange={handleFilterTypeChange}>
                            <option value="">All</option>
                            <option value="joy">Joy</option>
                            <option value="sadness">Sadness</option>
                            <option value="anger">Anger</option>
                            <option value="disgust">Disgust</option>
                            <option value="fear">Fear</option>
                        </select>
                    </div>

                    <div className="dashboard__emotion-log">
                        {allEntries.map(allEntries => (
                            <EmotionEntry key={allEntries._id} entry={allEntries} />
                        ))}
                    </div>
                </div>

                <button className="dashboard__add-btn" onClick={() => {} }><MdOutlineAddReaction className="dashboard__add-icon" /></button>
            </section>
        </main>
    )
}