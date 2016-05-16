let $fs = require("fs");
let $cp = require("child_process");
let rm = require("rimraf");

let exec = command => {
    return $cp.execSync(command, {cwd: "temp"});
};

describe("simple", () => {
    rm.sync("temp");
    $fs.mkdirSync("temp");
    exec("git init");
    $fs.writeFileSync("temp/.gitignore", String.raw`# OS X
.DS_Store

# Windows
Thumbs.db
Desktop.ini

# Linux
*~

# Node
node_modules

*.log`);
    exec("git add . && git commit -m init");
});