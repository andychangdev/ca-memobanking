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

        <button className="add-entry__close-btn" onClick={onClose}>
          <MdClose />
        </button>
        
        <div className="add-entry-emotion-select">
          <form>
            <input type="radio" id="Joy" name="emotion" value="Joy" checked={selectedEmotion === "Joy"} onChange={handleEmotionChange}
            /> 
            <label htmlFor="Joy">Joy</label>


            <input type="radio" id="Sadness" name="emotion" value="Sadness" checked={selectedEmotion === "Sadness"} onChange={handleEmotionChange}
            />
            <label htmlFor="Sadness">Sadness</label>

            <input type="radio" id="Anger" name="emotion" value="Anger" checked={selectedEmotion === "Anger"} onChange={handleEmotionChange}
            />
            <label htmlFor="Anger">Anger</label>

            <input id="Disgust" type="radio" name="emotion" value="Disgust" checked={selectedEmotion === "Disgust"} onChange={handleEmotionChange}
            />
            <label htmlFor="Disgust">Disgust</label>

            <input type="radio" id="Fear" name="emotion" value="Fear" checked={selectedEmotion === "Fear"} onChange={handleEmotionChange}
            />
            <label htmlFor="Fear">Fear</label>
          </form>
        </div>
      
        <div className="add-entry__content">
          <label htmlFor="content">CONTENT</label>
          <textarea id="content" placeholder="Content" rows={10} value={content} onChange={handleContentChange}
          />
        </div>

        <div className="add-entry__add-btn">
          <button onClick="">Add Emotion</button>
        </div>
      </div>
    </>
  );
}