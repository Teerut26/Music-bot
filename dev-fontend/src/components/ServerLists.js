import React, { useEffect, useState } from "react";
import { base_url } from "../config";

export default function ServerLists() {
  const [Guilds, setGuilds] = useState(null);
  const getGuilds = async () => {
    let res = await fetch(base_url + "/guilds");
    let data = await res.json();
    setGuilds(data);
  };
  useEffect(() => {
    getGuilds();
  }, []);
  return (
    <div className="p-3 grid grid-cols-1 md:grid-cols-3 gap-4">
      {Guilds !== null ? Guilds.map((item) => <List {...item} />) : ""}
    </div>
  );
}

const List = ({ channels_length, id, name, icon }) => {
  return (
    <div className="flex shadow-sm p-3 gap-3 rounded-lg bg-light">
      <div className="flex flex-col items-left justify-center">
        <img
          className="rounded-full w-12 h-12"
          src={icon !== null ? `https://cdn.discordapp.com/icons/${id}/${icon}.webp` : "https://cdn.discordapp.com/embed/avatars/2.png"}
        />
      </div>
      <div className="flex flex-col items-left justify-center">
        <div className="text-2xl">{name}</div>
        <div className="flex items-center gap-2">
          <i class="fas fa-megaphone"></i>
          <div className="text-sm font-bold">{channels_length}</div>
        </div>
      </div>
    </div>
  );
};
