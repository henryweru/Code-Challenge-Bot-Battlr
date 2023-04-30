import {useState,useEffect} from 'react'
 import YourBotArmy from './YourBotArmy'
 import BotCollection from './BotCollection'
  function BotsPage() {
    //step one code setting state
    const[bots,setBots]=useState([])
    //function for fetching data from server
    function fetchData(){
      return fetch("http://localhost:3000/bots")
      .then((res)=>res.json())
      .then((data)=>{
        setBots(data)
      })
    }
    //run fetch sideeffect when page loads
  useEffect(()=>{
    fetchData()
  }, [])
  //add bot to army when the bot is clicked
  function enlistBot(bot){
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  }
  function removeBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  }
  function deleteBot(bot) {
    const deletedBot = bots.filter((b) => b.id !== bot.id);
    setBots(() => deletedBot);
  }
   return (
    <div>
    <YourBotArmy
      bots={bots.filter((b) => b.army)}
      removeBot={removeBot}
      deleteBot={deleteBot}
    />
    <BotCollection bots={bots} enlistBot={enlistBot} deleteBot={deleteBot} />
  </div>
   )
 }
 export default BotsPage;