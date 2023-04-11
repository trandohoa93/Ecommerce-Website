import StarHaft from '../../Assets/Images/HaflStar.svg';
import StarFill from '../../Assets/Images/StarFill.svg';
import StarNoFill from '../../Assets/Images/StarNoFill.svg';

interface Props {
  stars: number;
}

function Star({ stars }: Props) {
  const starArray = [];
  for (let i = 0; i < stars; i++) {
    starArray.push(
      <span key={i}>
        {stars >= i + 1 ? (
          <img src={StarFill} alt="Star" />
        ) : stars >= i + 0.5 ? (
          <img src={StarHaft} alt="Star" />
        ) : (
          <img src={StarNoFill} alt="Star" />
        )}
      </span>,
    );
  }
  return <div>{starArray}</div>;
}

export default Star;
