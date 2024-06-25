"use client";

import React, { useState } from "react";
import YouTube from "react-youtube";
import { IoMdCloseCircle } from "react-icons/io";

const CardVideo = ({ youtubeId }) => {
  const [show, setShow] = useState(true);

  const hendleButton = () => {
    // setShow(false);
    setShow((prev) => !prev);
  };

  const option = {
    width: "300",
    height: "250",
  };
  return (
    <div className="fixed bottom-2 right-2">
      {show ? (
        <div>
          {" "}
          <button
            onClick={hendleButton}
            className="text-3xl float-right text-white"
          >
            <span>
              <IoMdCloseCircle />
            </span>
          </button>
          <YouTube
            videoId={youtubeId}
            onReady={(e) => e.target.pauseVideo()}
            onEnd={(e) => e.target.pauseVideo()}
            opts={option}
            onError={(e) => alert("video not found")}
          />
        </div>
      ) : (
        <>
          <div>
            <button
              onClick={hendleButton}
              className="md:text-xl float-right text-white bg-slate-600 mr-6 p-1 rounded-lg hover:text-yellow-500 transition-all"
            >
              <h2>Tonton trailer</h2>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardVideo;
