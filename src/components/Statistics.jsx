import PropTypes from "prop-types";

export default function Statistics({ stats }) {
  return (
    <section className="stats">
      <StatisticSection number={stats.numberOfWords} description="Words" />
      <StatisticSection number={stats.numberOfCharacters} description="Characters" />
      <StatisticSection number={stats.instaCharactersLeft} description="Instagram" />
      <StatisticSection number={stats.facebookCharactersLeft} description="Facebook" />
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.shape({
    numberOfWords: PropTypes.number.isRequired,
    numberOfCharacters: PropTypes.number.isRequired,
    instaCharactersLeft: PropTypes.number.isRequired,
    facebookCharactersLeft: PropTypes.number.isRequired,
  }).isRequired,
};

function StatisticSection({ number, description }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</span>
      <h2 className="second-heading">{description}</h2>
    </section>
  );
}

StatisticSection.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
