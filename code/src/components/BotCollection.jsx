import PropTypes from 'prop-types';
import BotCard from './BotCard';
function BotCollection({ bots, enlistBot, deleteBot }) {
  const botItems = bots.map((bot) => (
    <BotCard
      key={bot.id}
      bot={bot}
      clickEvent={enlistBot}
      deleteBot={deleteBot}
    />
  ));

  return (
    <div className="ui four column grid">
      <div className="row">{botItems}</div>
    </div>
  );
}

BotCollection.propTypes = {
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
        'Captain',
      ]).isRequired,
      avatar_url: PropTypes.string.isRequired,
      catchphrase: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  enlistBot: PropTypes.func.isRequired,
  deleteBot: PropTypes.func.isRequired,
};

export default BotCollection;
