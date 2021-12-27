require("dotenv").config();
const express = require("express");
let cors = require("cors");
const path = require("path");

// const router = express.Router();
const app = express();
app.use(cors());

module.exports = (client) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
  });

  app.get("/guilds", (req, res) => {
    const guilds = client.guilds.cache.map((guild) => ({
      id: guild.id,
      name: guild.name,
      icon: guild.icon,
      channels_length: JSON.parse(JSON.stringify(guild)).channels.length,
    }));
    // const guilds = client.guilds.cache.map((guild) => guild);
    res.json(guilds);
  });

  app.get("/user", (req, res) => {
    res.json(client.user);
  });

  app.get("/presence", (req, res) => {
    res.json(client.presence);
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Start server at port ${process.env.PORT || 3000}.`);
  });
};
