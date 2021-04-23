const PokeCard = ({ id, name, type, base_experience }) => {
  return (
    <div>
      <h4>{name}</h4>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=""
      />
      <p>type: {type}</p>
      <p>base experience: {base_experience}</p>
    </div>
  );
};

export default PokeCard;
