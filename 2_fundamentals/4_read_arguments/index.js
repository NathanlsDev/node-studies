// console.log(process.argv);
const args = process.argv.slice(2);

// console.log(args);

const name = args[0] || 'Users';
const age = args[1] || 'at least 18';


console.log(`${name} is ${age} years old.`)