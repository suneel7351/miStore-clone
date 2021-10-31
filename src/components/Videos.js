import React from "react";
import VideoCard from "./VideoCard.js";
import '../style/videos.css'
function Videos({ video }) {
  return (
    <>
      <div className="videos">
        {video.map((items, index) => {
          return (
            <VideoCard
              key={items.image}
              image={items.image}
              name={items.name}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default Videos;
