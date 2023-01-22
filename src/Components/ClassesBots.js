//Classes
import React from "react";

function ClassesBots() {
  return <div>Bot Name is: {bot.name} </div>;
}

class Bot {
  constructor(botName) {
    this.name = botName;
  }
}
const bot = new Bot("Philo");

export default ClassesBots;
