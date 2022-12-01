import axios from "axios";
import React, { useState } from "react";
import Bookmark from "../Bookmark/Bookmark";
import ImageLists from "../ImageLists/ImageLists";
import "./ImageSearch.css";

export default function ImageSearch() {
  const [value, setValue] = useState("");
  const [imageData, setImageData] = useState([]);
  const [showBookmark, setShowBookmark] = useState(false);
  let [bookmarkData, setBookmarkData] = useState([]);
  const [bookmark, setBookmark] = useState(new Map());

  const handleInput = function (e) {
    setValue(e.target.value);
  };

  const handleClick = function () {
    setShowBookmark(false);
    axios
      .get(
        `https://api.unsplash.com/search/photos/?query=${value}&client_id=BaOM-KvEzb2Pq1vVdqACsY7c8FxBbTdAKv4zl8tg7y4`
      )
      .then((res) => setImageData(res.data.results))
      .catch((err) => console.log(err.message));
  };

  const handleBookmarkBtn = function () {
    setBookmarkData([...bookmark.values()]);
    setShowBookmark(true);
  };

  const handleBookmark = function (e) {
    if (bookmark.has(e.id)) {
      bookmark.delete(e.id);
    } else {
      bookmark.set(e.id, e);
    }
  };

  return (
    <div className="container py-4">
      <header className="header mb-5">
        <div className=" heading | border shadow mb-3">
          <div className="display-6">React Photo Search</div>
          <Bookmark bookmark={bookmark} handleBookmarkBtn={handleBookmarkBtn} />
        </div>
        <div className=" searchInput | mb-3">
          <input
            type="text"
            placeholder="Search for images"
            className="form-control shadow"
            onChange={handleInput}
          ></input>
          <button className="btn btn-dark shadow" onClick={handleClick}>
            Search
          </button>
        </div>
      </header>
      <hr></hr>
      <main>
        <ImageLists
          data={showBookmark ? bookmarkData : imageData}
          handleBookmark={handleBookmark}
        />
      </main>
    </div>
  );
}
