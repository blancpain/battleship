export default function Ship(length) {
  const getLength = () => length;
  let health = length;
  let sunk = false;
  let hits = 0;

  const isSunk = () => sunk;
  const getHits = () => hits;

  const hit = () => {
    health -= 1;
    hits += 1;
    if (health <= 0) {
      sunk = true;
    }
  };

  return { getLength, getHits, hit, isSunk };
}
