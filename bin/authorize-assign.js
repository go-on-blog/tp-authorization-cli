#!/usr/bin/env node

var minimist = require("minimist"),
    args;

args = minimist(process.argv.slice(2), {
    alias: {
        d: "domain",
        h: "help",
        p: "project",
        r: "role",
        t: "token",
        u: "user",
        v: "version"
    }
});

if (args.version) {
    console.log("v" + require("../package.json").version);
} else if (args.help || process.argv.length < 6 || !args.domain || !args.token || !args.user || !args.project) {
    require("../lib/command/usage")(process.argv[1]).then(console.error);
} else {
    require("../lib/adapter/authorize-assign")(args).then(console.log, console.error);
}
