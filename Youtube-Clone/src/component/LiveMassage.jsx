import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMassage } from "../utils/Chat";
import useName from "../utils/useName";
import useComment from "../utils/useComment";
import ShowMassage from "./ShowMassage";

function LiveMassage() {
  const dispatch = useDispatch();
  const massages = useSelector((store) => store.chat.massage);
  const [myMassage, setMyMassage] = useState("");

  useEffect(() => {
    const interVal = setInterval(() => {
      dispatch(
        addMassage({
          name: useName(),
          massage: useComment(),
        })
      );
    }, 2000);

    return () => clearInterval(interVal);
  }, [dispatch]);

  const handleSendMessage = () => {
    if (myMassage.trim() !== "") {
      dispatch(
        addMassage({
          name: "You",
          massage: myMassage,
        })
      );
      setMyMassage("");
    }
  };

  return (
    <div className="">
      {/* Messages Container */}
      <div
        className="flex-1 p-4 overflow-y-scroll bg-white rounded-t-lg space-y-3"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#d1d5db #ffffff" }}
      >
        <div className="flex flex-col-reverse">
          {massages.map((each, index) => (
            <ShowMassage key={index} name={each.name} massage={each.massage} />
          ))}
        </div>
      </div>

      {/* Fixed Input Field */}
      <div className="flex items-center gap-2 p-3 bg-gray-200 rounded-b-lg">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Type your message..."
          value={myMassage}
          onChange={(e) => setMyMassage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default LiveMassage;
