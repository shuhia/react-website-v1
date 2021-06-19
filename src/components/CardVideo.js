import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";

function CardVideo(props) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <li className="cards__item" onClick={togglePopup}>
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <iframe
              onClick={togglePopup}
              className="cards__item__img"
              src="https://www.youtube.com/embed/CxwJrzEdw1U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>

      {isOpen && (
        <Popup
          content={
            <>
              <iframe
                className="popup-video"
                src="https://www.youtube.com/embed/CxwJrzEdw1U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
}

export default CardVideo;
