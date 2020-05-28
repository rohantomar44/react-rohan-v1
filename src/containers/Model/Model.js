import React from "react";
import "./Model.css";


const ModelPopup = ({email, name, onClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div style={{zIndex: "10"}} className={showHideClassName}>
        <section className="modal-main">
            <div className="model-info">Name: {name}</div>
            <div className="model-info">Email: {email}</div>
          <button className="close-button" onClick={onClose}>Confirm</button>
        </section>
      </div>
    );
  };
export default ModelPopup