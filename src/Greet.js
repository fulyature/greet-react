const Greet = (props) => {
  const { name, children, handleClick, heroName, selectedHero, img } = props;
  return (
    <div>
      <h1>
        Hello {name} <span>a.k.a</span> {heroName}
      </h1>
      {children}
      <button onClick={() => handleClick(heroName)}>Click me to See</button>
      {selectedHero === heroName && <img src={img} alt="img" />}
    </div>
  );
};

export default Greet;
