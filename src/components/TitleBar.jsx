import React, { useState } from "react";
import {
  Bell,
  ChevronDown,
  ThumbsUp,
  ThumbsDown,
  Forward,
  Download,
  BadgeDollarSign,
  CircleEllipsis,
} from "lucide-react";
import verified from "../assets/verified.png";
const TitleBar = ({ videoContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ellipsesOpen, setEllipsesOpen] = useState(false);
  return (
    <div>
      <h1 className="font-bold text-xl text-[#0f0f0f]">{videoContent.title}</h1>
      <br />
      <div className="flex justify-between">
        <div className="flex justify-center">
          <img
            className="w-12 h-12"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />

          <div>
            <div className="flex items-center">
              <h1 className="font-bold text-lg text-[#0f0f0f] pr-1.5">
                {videoContent.channelTitle}{" "}
              </h1>
              <img
                className="h-[14px] w-[14px]"
                title="Verified"
                src={verified}
                alt="verified"
              />
            </div>
            <h1>538k subscribers</h1>
          </div>
          <div className="relative inline-block pl-3">
            <button
              className="px-4 py-2 bg-gray-200 text-black font-medium rounded-full hover:bg-gray-300 transition flex items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Bell className="w-8 h-8 ml-2 text-gray-600 pr-0.5" />
              Subscribed
              <ChevronDown className="w-6 h-6 text-gray-600 mr-2 pl-0.5" />
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                <ul className="py-2 text-gray-800">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    All Notifications
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Personalized
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    None
                  </li>
                  <hr />
                  <li className="px-4 py-2 hover:bg-red-100 text-red-500 cursor-pointer">
                    Unsubscribe
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="pr-2">
            <button className="px-4 py-2 bg-gray-200 text-black font-medium rounded-full hover:bg-gray-300 transition flex items-center cursor-pointer">
              <ThumbsUp className="w-6 h-6 ml-2 text-gray-600 pr-0.5" />
              5.3k |
              <ThumbsDown className="w-6 h-6 ml-2 text-gray-600 pr-0.5" />
            </button>
          </div>
          <div className="pr-2">
            <button className="px-4 py-2 bg-gray-200 text-black font-medium rounded-full hover:bg-gray-300 transition flex items-center cursor-pointer">
              <Forward /> Share
            </button>
          </div>

          <div className="pr-2">
            <button className="px-4 py-2 bg-gray-200 text-black font-medium rounded-full hover:bg-gray-300 transition flex items-center cursor-pointer">
              <Download /> Download
            </button>
          </div>
          <div className="pr-2">
            <button className="px-4 py-2 bg-gray-200 text-black font-medium rounded-full hover:bg-gray-300 transition flex items-center cursor-pointer">
              <BadgeDollarSign /> Thanks
            </button>
          </div>
          <div>
            <CircleEllipsis onClick={() => setEllipsesOpen(!ellipsesOpen)} />
            {ellipsesOpen && (
              <div className="absolute  mt-2 w-48 bg-white shadow-lg rounded-lg border">
                <ul className="py-2 text-gray-800">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Clip
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Save
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Report
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
