import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { MdOutlineAddReaction } from "react-icons/md";
import api from "../utilities/apiClient";
import { AddEntry, DashboardHeader, EmotionEntry } from "../components";
import { EmotionChart } from "../components/EmotionChart";


export function Dashboard() {

  const [userData, setUserData] = useState(null);
  const [allEntries, setAllEntries] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [emotionCount, setEmotionCount] = useState([]);
  const [openModal, setOpenModal] = useState({ isVisible: false, data: null });
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const response = await api.get("/users/data");
      if (response.data && response.data.user) {
        setUserData(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/");
      } else {
        console.error(
          "An unexpected error occurred while fetching user data:",
          error
        );
      }
    }
  };

  const getAllEntries = async () => {
    try {
      if (filterType !== "") {
        const query = filterType;
        const response = await api.get(`emotions/?type=${query}`);
        if (response.data && response.data.entries) {
          setAllEntries(response.data.entries);
        }
      } else {
        const response = await api.get("emotions/");
        if (response.data && response.data.entries) {
          setAllEntries(response.data.entries);
        }
      }
    } catch (error) {
      console.error(
        "An unexpected error occurred while fetching user entries:",
        error
      );
    }
  };

  const getEmotionCount = async () => {
    try {
      const response = await api.get("emotions/count");
      if (response.data && response.data.emotionCount) {
        setEmotionCount(response.data.emotionCount);
        console.log(emotionCount);
      }
    } catch (error) {
      console.error(
        "An unexpected error occurred while fetching user data:",
        error
      );
    }
  };

  useEffect(() => {
    getEmotionCount();
  }, []);

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
        <DashboardHeader />
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
      <DashboardHeader />
      <section className="dashboard content-grid">
        <div className="dashboard__container">
          <div className="dashboard__greeting">
            <h1>Hey {userData.firstname}!</h1>
            <h3>Let’s capture today’s feelings ... </h3>
          </div>

          <div className="dashboard__chart">
            <EmotionChart emotionCount={emotionCount} />
          </div>

          <div className="dashboard__emotion-filter">
            <label>Filter By: </label>
            <select onChange={handleFilterTypeChange}>
              <option value="">All</option>
              <option value="Joy">Joy</option>
              <option value="Sadness">Sadness</option>
              <option value="Anger">Anger</option>
              <option value="Disgust">Disgust</option>
              <option value="Fear">Fear</option>
            </select>
          </div>

          <div className="dashboard__emotion-log">
            {allEntries.map((allEntries) => (
              <EmotionEntry
                key={allEntries._id}
                entry={allEntries}
                getAllEntries={getAllEntries}
                getEmotionCount={getEmotionCount}
              />
            ))}
          </div>

          <Modal
            isOpen={openModal.isVisible}
            onRequestClose={() => {}}
            style={{
              overlay: {
                backgroundColor: "rgba(0,0,0,0.2)",
                display: "grid",
                alignItems: "end",
              },
            }}
            className={"dashboard__modal"} >
            <AddEntry
              onClose={() => {
                setOpenModal({ isVisible: false, data: null });
              }}
              getAllEntries={getAllEntries}
              getEmotionCount={getEmotionCount} />
          </Modal>
        </div>

        <button
          className="dashboard__add-btn"
          onClick={() => {
            setOpenModal({ isVisible: true, data: null });
          }} >
          <MdOutlineAddReaction className="dashboard__add-icon" />
        </button>
      </section>
    </main>
  );
}
