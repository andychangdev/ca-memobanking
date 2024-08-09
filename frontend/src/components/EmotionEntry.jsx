import { MdOutlineDelete} from "react-icons/md";
import { format } from 'date-fns';
import api from "../utilities/apiClient";

export function EmotionEntry({ entry, getAllEntries, getEmotionCount }) {

    const formattedDate = format(new Date(entry.createdOn), "d MMMM yyyy");

    const deleteEntry = async () => {
      const entryId = entry._id;

      try {
        const response = await api.delete("/emotions/" + entryId);

        if (response.data && response.status === 200) {
          getAllEntries();
          getEmotionCount();
        }
      } catch (error) {
        if(error.response && error.response.data && error.response.data.message) {
          console.log("An unexpected error occurred while deleting data. Please try again.")
        }
      }
    }

    const getIndicatorClass = (type) => {
      switch (type) {
        case 'Joy':
          return 'emotion-entry__indicator-circle--joy';
        case 'Sadness':
          return 'emotion-entry__indicator-circle--sadness';
        case 'Anger':
          return 'emotion-entry__indicator-circle--anger';
        case 'Disgust':
          return 'emotion-entry__indicator-circle--disgust';
        case 'Fear':
          return 'emotion-entry__indicator-circle--fear';
        default:
          return '';
      }
    };
  
  return (
    <>
      <div className="emotion-entry">
        <div className="emotion-entry__data">
          <div className="emotion-entry__type-indicator">
            <span className={`emotion-entry__indicator-circle ${getIndicatorClass(entry.type)}`}></span>
          </div>

          <div className="emotion-entry__type">
            <p>{entry.type}</p>
          </div>

          <div className="emotion-entry__date">
            <p>{formattedDate}</p>
          </div>

          <div className="emotion-entry__content">
            <p>{entry.content}</p>
          </div>

          <button className="emotion-entry__actions" onClick={deleteEntry} >
            <MdOutlineDelete className="emotion-entry__delete"/>
          </button>
        </div>
      </div>
    </>
  );
}

