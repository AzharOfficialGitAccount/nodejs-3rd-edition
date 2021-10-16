// ======================== importing the modules======================================

const add = require("./utils");
const getNotes = require("./notes");
const validate = require("validator");
const chalk = require("chalk");
const yargs = require('yargs');

// ============================ displaying data from utils.js================

const msg = getNotes();
console.log(msg);

console.log(data);

const sum = add(4, 4);

console.log(sum);

// ===============================using validator =========================================================

console.log(validate.isEmail("azharofficial599@gmail.com"));

console.log(validate.isURL("https://gosacorp.com"));

// =========================== for bold color==========================================================

const greenMSg = chalk.green.bgRed.bold("success..!!");
console.log(greenMSg);

const redMsg = chalk.red.bgRed.bold("failed..!!");
console.log(redMsg);

// =========================== for simple color==========================================================

const greenMSg2 = chalk.green("success..!!");
console.log(greenMSg2);

const redMsg2 = chalk.red("failed..!!");
console.log(redMsg2);

// ======================== use for passing run time value================================================

const command = process.argv[2];

console.log(process.argv);


if (command === "add") {

    console.log("adding data..!!");
}
else if (command === "remove") {
    console.log("removing data..!!");
}

// =======================comparing yargs and argv=====================================

console.log(process.argv);

console.log(yargs.argv);





