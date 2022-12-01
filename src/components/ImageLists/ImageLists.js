import React from "react";
import "./ImageLists.css";

export default function ImageLists(props) {
  return (
    <div className="imageLists">
      <ul className="images">
        {props.data.map((e) => (
          <li key={e.id} className="imageList">
            <img
              className="image shadow"
              src={e.urls.full}
              alt={e.alt_description}
              onClick={() => props.handleBookmark(e)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
