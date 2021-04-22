
const hexArray = Object.freeze(new Array(256).fill(0).map((ele, idx) => {
  return idx.toString(16).padLeft(2, '0').toLowerCase();
}));

const randomIndex = () => {
  return Math.floor(Math.random() * 256);
};
const randomHex = (size=0) => {
  return new Array(size).fill(0).map(ele => {
    return hexArray[randomIndex()];
  });
};

const uuid = (divider="-") => {
  return [
    ...randomHex(4), divider,
    ...randomHex(2), divider,
    ...randomHex(2), divider,
    ...randomHex(2), divider,
    ...randomHex(6),
  ].join('');
};

const simpleUUId = {
  hexArray,
  randomHex,
  uuid
};
export default simpleUUId;

export {
  hexArray,
  randomHex,
  uuid,
};

