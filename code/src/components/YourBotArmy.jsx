import PropTypes from 'prop-types';
import BotCard from './BotCard';

function YourBotArmy({bots, removeBot, deleteBot}) {
  const armyItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={removeBot}
        deleteBot={deleteBot}
      />
    );
  });
  
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {armyItem}
        </div>
      </div>
    </div>
  )
}

YourBotArmy.propTypes = {
  bots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      bot_class: PropTypes.oneOf([
        'Assault',
        'Defender',
        'Support',
        'Medic',
        'Witch',
        'Captain'
      ]).isRequired,
      catchphrase: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      health: PropTypes.number.isRequired,
      damage: PropTypes.number.isRequired,
      armor: PropTypes.number.isRequired
    })
  ).isRequired,
  removeBot: PropTypes.func.isRequired,
  deleteBot: PropTypes.func.isRequired
};

export default YourBotArmy;
