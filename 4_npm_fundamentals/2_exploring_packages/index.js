const _ = require("lodash");

const a = [4, 5, 6, 6, 4, 95, 3];
const b = [3, 4, 5, 3, 4, 6, 4];

const diff = _.difference(a, b);

console.log(diff);
