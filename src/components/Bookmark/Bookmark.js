import React from "react";

export default function Bookmark(props) {
  return (
    <div className="bookmark">
      <button className="btn btn-dark" onClick={props.handleBookmarkBtn}>
        Bookmarks
      </button>
    </div>
  );
}
