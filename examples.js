const {
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
} = require("./utils");

const result = pipe(
  capitalize, // fn(x) -> result
  toStr, // result: capitalize(str) -> toStr(result)
  reverse, // result: toStr(result) -> reverse(result)
  capitalize,
  reverse,
  toStr
)("buckethead"); // x

console.info('> result: ', result)


const fizzbuzz = (n) =>
  map(
    or(
      concatFns(
        is('buzz', mulBy(5)),
        is('fizz', mulBy(3))
      ),
      constantly
    )
  )(range(1, n))

console.info("> ", fizzbuzz(15));
