import { useState } from 'react';
import { MdClose } from "react-icons/md"


export function AddEntry({ onClose }) {

  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [content, setContent] = useState("");

  const handleEmotionChange = (event) => {
    setSelectedEmotion(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <>
      <div className="add-entry">

        <div className="add-entry__header">
          <div className="add-entry__title">
            <h3>How are you feeling?</h3>
          </div>
          <button className="add-entry__close-btn" onClick={onClose}>
            <MdClose />
          </button>
        </div>

        <div className="add-entry-emotion-select">
          <form className="add-entry__select-container">
            <div className="emotion-option">
              <input type="radio" id="Joy" name="emotion" value="Joy" checked={selectedEmotion === "Joy"} onChange={handleEmotionChange} />
              <label htmlFor="Joy" className="circle circle-joy"></label>
              <p className="emotion-label">Joy</p>
            </div>

            <div className="emotion-option">
              <input type="radio" id="Sadness" name="emotion" value="Sadness" checked={selectedEmotion === "Sadness"} onChange={handleEmotionChange} />
              <label htmlFor="Sadness" className="circle circle-sadness"></label>
              <p className="emotion-label">Sadness</p>
            </div>

            <div className="emotion-option">
              <input type="radio" id="Anger" name="emotion" value="Anger" checked={selectedEmotion === "Anger"} onChange={handleEmotionChange} />
              <label htmlFor="Anger" className="circle circle-anger"></label>
              <p className="emotion-label">Anger</p>
            </div>

            <div className="emotion-option">
              <input type="radio" id="Disgust" name="emotion" value="Disgust" checked={selectedEmotion === "Disgust"} onChange={handleEmotionChange} />
              <label htmlFor="Disgust" className="circle circle-disgust"></label>
              <p className="emotion-label">Disgust</p>
            </div>

            <div className="emotion-option">
              <input type="radio" id="Fear" name="emotion" value="Fear" checked={selectedEmotion === "Fear"} onChange={handleEmotionChange} />
              <label htmlFor="Fear" className="circle circle-fear"></label>
              <p className="emotion-label">Fear</p>
            </div>
          </form>
        </div>
      
        <div className="add-entry__content">
          <label htmlFor="content"><h4>Reason</h4></label>
          <textarea id="content" className='add-entry__textarea' placeholder="Why do you feel this way?" rows={10} value={content} onChange={handleContentChange}
          />
        </div>

        <div className="add-entry__add-btn">
          <button onClick="">Add Emotion</button>
        </div>
      </div>
    </>
  );
}