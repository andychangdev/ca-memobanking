import { MdDelete } from "react-icons/md";
import { format } from 'date-fns';

export function EmotionEntry({ entry }) {

    const formattedDate = format(new Date(entry.createdOn), "d MMMM yyyy");

    const getIndicatorClass = (type) => {
      switch (type) {
        case 'joy':
          return 'emotion-entry__indicator-circle--joy';
        case 'sadness':
          return 'emotion-entry__indicator-circle--sadness';
        case 'anger':
          return 'emotion-entry__indicator-circle--anger';
        case 'disgust':
          return 'emotion-entry__indicator-circle--disgust';
        case 'fear':
          return 'emotion-entry__indicator-circle--fear';
        default:
          return '';
      }
    };
  
  return (
    <>
      <div className="entry">
        <div className="entry__data">
          <div className="entry__type-indicator">
            <span className={`emotion-entry__indicator-circle ${getIndicatorClass(entry.type)}`}></span>
          </div>
          <div className="entry__details">
            <div>
              <p className="entry__date">{formattedDate}</p>
              <p className="entry__type">{entry.type}</p>
            </div>
          </div>
          <div className="entry__content">
            <p>{entry.content}</p>
          </div>
          <div className="entry__actions">
            <MdDelete onClick="" />
          </div>
        </div>
      </div>
    </>
  );
}

