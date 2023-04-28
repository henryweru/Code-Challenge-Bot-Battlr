import React, { useState, useEffect } from "react";

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch bots data from an API or other data source
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <h2>Bots Collection</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            <p>Created by: {bot.creator}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
