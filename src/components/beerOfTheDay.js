const Beer = ({ tagline, beerName, description }) => {
  return (
    <div>
      <h2 className="beerTitle">Beer of the Day</h2>
      <h3 className="beerName">{beerName}</h3>
      <p>{tagline}</p>
      <p>{description}</p>
    </div>
  );
};

export default Beer;
