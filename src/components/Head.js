import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn-icons-png.flaticon.com/128/4254/4254068.png"
        ></img>
        <a href="/">
          <img
            className="h-12 mx-2 "
            alt=" YouTube-logo"
            src=" https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          ></img>
        </a>
      </div>
      <div className="col-span-10 text-center">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
          
        </div>
{/* 
        <div className="fixed  bg-white py-2 px-5 w-[30rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍Iphone</li>
            <li className="py-2 shadow-sm ">🔍Iphone</li>
            <li className="py-2 shadow-sm">🔍Iphone</li>
            <li className="py-2 shadow-sm">🔍Iphone</li>
            <li className="py-2 shadow-sm">🔍Iphone</li>
            <li className="py-2 shadow-sm">🔍Iphone</li>
            
            
          </ul>
        </div> */}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-logo"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        ></img>
      </div>
    </div>
  );
};

export default Head;
