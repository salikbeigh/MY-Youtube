import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/ChatSlice";
import { generateRandomName } from "./utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "hello " + generateRandomName()+"🩷🩵🤍❣️💖❤️💙🤎💕💘🧡💜💞💝💓❤️‍🔥❤️‍🔥🖤💚🩶❤️‍🩹💗",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  });
  return (
    <>
      <div className="w-full h-[590px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("on message submit", LiveMessage);
          dispatch(
            addMessage({
              name: "salik",
              message: LiveMessage ,
            })
          );
          setLiveMessage('')
        }}
      >
        <input
          className=" px-2 w-72"
          type="text"
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2  bg-gray-400 rounded-lg">Comment</button>
      </form>
    </>
  );
};

export default LiveChat;
