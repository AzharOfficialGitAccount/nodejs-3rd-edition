const fs = require("fs");

fs.writeFileSync("my-notes", "This is my notes-app");

fs.appendFileSync("my-notes", " please append the files and add more data");