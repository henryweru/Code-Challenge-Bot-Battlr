import PropTypes from 'prop-types';

const botTypeClasses = {
  Assault: 'icon military',
  Defender: 'icon shield',
  Support: 'icon plus circle',
  Medic: 'icon ambulance',
  Witch: 'icon magic',
  Captain: 'icon star',
};

function BotCard({ bot, clickEvent, deleteBot }) {
  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={() => clickEvent(bot)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini blue button"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteBot(bot);
                }}
              >
                delete
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

BotCard.propTypes = {
  bot: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bot_class: PropTypes.string.isRequired,
    catchphrase: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired,
    damage: PropTypes.number.isRequired,
    armor: PropTypes.number.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }),
  clickEvent: PropTypes.func.isRequired,
  deleteBot: PropTypes.func.isRequired,
};

export default BotCard;
