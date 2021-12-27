import React, { useEffect, useState } from "react";
import { base_url } from "../config";

export default function Navbar() {
  const [UserData, setUserData] = useState(null);
  const [PresenceData, setPresenceData] = useState(null);
  const getUser = async () => {
    let res = await fetch(base_url + "/user");
    let data = await res.json();
    document.title = `${data.username}`
    setUserData(data);
  };
  const getPresence = async () => {
    let res = await fetch(base_url + "/presence");
    let data = await res.json();
    setPresenceData(data);
  };
  useEffect(() => {
    getUser();
    getPresence()
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand flex justify-center items-center gap-2">
          <div className="">
            <img
              className="rounded-full w-10 h-10"
              src={UserData !== null ? UserData.displayAvatarURL : "https://cdn.discordapp.com/embed/avatars/2.png"}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-md font-bold">{UserData !== null ? UserData.username : ""}</div>
            <div className="text-sm">{PresenceData !== null ? PresenceData.activities[0].name : ""}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
