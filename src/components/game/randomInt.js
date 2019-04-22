// eslint-disable-next-line import/prefer-default-export

export default function randomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
