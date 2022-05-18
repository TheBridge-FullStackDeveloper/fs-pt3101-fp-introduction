const reverse = (arr) => [...arr].reverse();
const tap = (arg) => console.info("> tapping: ", arg) || arg;
const toStr = (arr) => arr.join("");
const capitalize = ([first, ...rest]) => [first.toUpperCase(), ...rest];

const mulBy = (mul) => (n) => !(n % mul);
const is = (str, fn) => (arg) => fn(arg) ? str : "";
const concatFns = (fn1, fn2) => (arg) => `${fn1(arg)}${fn2(arg)}`;
const map = (fn) => (list) => {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(fn(list[i], i, list));
  }
  return result;
};
const constantly = (arg) => arg;
const or = (fn1, fn2) => (arg) => fn1(arg) || fn2(arg);
const range = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((result, fn) => fn(result), x);

module.exports = {
  reverse,
  tap,
  toStr,
  capitalize,
  pipe,
  mulBy,
  is,
  concatFns,
  map,
  constantly,
  or,
  range,
};
