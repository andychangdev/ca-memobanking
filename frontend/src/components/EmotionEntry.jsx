import { MdDelete } from "react-icons/md";
import { format } from 'date-fns';

export function EmotionEntry({ entry }) {

    const formattedDate = format(new Date(entry.createdOn), "d MMMM yyyy");

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

          <div className="emotion-entry__actions">
            <MdDelete onClick="" />
          </div>
        </div>
      </div>
    </>
  );
}

