#!/usr/bin/env node

const program = require("commander");
const {
  displayCommitCheatSheet,
  displayVersionCheatSheet
} = require("./logic");
const packageJSON = require("./package.json");

program.version(packageJSON.version).description(packageJSON.description);

program
  .command("commit [<tag>]")
  .alias("c")
  .description("show semantic commit message cheat sheet")
  .action(tag => displayCommitCheatSheet(tag));

program
  .command("ver")
  .alias("v")
  .description("show semantic versioning cheat sheet")
  .action(displayVersionCheatSheet);

program.parse(process.argv);
