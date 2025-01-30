import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_INFO_API } from "../utils/constants";
import TitleBar from "./TitleBar";
import Description from "./Description";
const WatchPage = () => {
  const [videoContent, setVideoContent] = useState({});
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const params = useParams();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoInfo();
  }, []);
  const getVideoInfo = async () => {
    console.log("get video Info fn");
    const data = await fetch(YOUTUBE_VIDEO_INFO_API + searchParams.get("v"));
    const json = await data.json();
    // setVideos(json.items);
    console.log(json.items[0].snippet);
    setVideoContent(json.items[0].snippet);
  };
  return (
    <div className="flex flex-col w-full">
      {" "}
      <div className="px-5 flex w-full">
        <div className="w-[65%]">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <TitleBar videoContent={videoContent} />
          <Description text={videoContent.description} />
          {/* {videoContent && <Description text={videoContent.description} />} */}
        </div>
        <div className="w-[35%] ">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
