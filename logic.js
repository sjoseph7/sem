const colors = require("colors");

/**
 * @description Logic for displaying the commit cheat sheet.
 *  This function can take a "tag" parameter that dictates what
 *  information should be displayed.
 * @param {string} tag - [all, *types, format, footer, (TBD: header, body)] *default
 */
const displayCommitCheatSheet = (tag = "types") => {
  if (["all", "format"].includes(tag)) {
    console.info(`
${"Format:".underline}
<type>(<scope>): <subject>

<body>

<footer>`);
    console.info(`
${"Example:".underline}
fix(middleware): ensure Range headers adhere more closely to RFC 2616

Add one new dependency, use 'range-parser' (Express dependency) to compute
range. It is more well-tested in the wild.

Fixes #2310`);
  }
  if (["all", "types"].includes(tag)) {
    console.info(`
${"Types:".underline}
${"feat:".green} A new feature
${"fix:".red} A bug fix
${"docs:".blue} Documentation only changes
${
  "style:".cyan
} Changes that do not affect the meaning of the code (formatting, missing semi-colons, etc)
${"refactor:".magenta} A code change that fixes no bugs and adds no features
${"perf:".brightGreen} A code change that improves performance
${"test:".yellow} Adds missing test(s)
${
  "chore:".grey
} Changes to the build process or auxilliary tools and libraries like documentation generation`);
  }
  if (["all", "footer"].includes(tag)) {
    console.info(`
${"Footer:".underline}
Closed issues SHOULD be listed in the footer section as follows:
"Closes #234"
"Closes #123, #245, #992"

Breaking changes MUST be mentioned in the footer with a change description, justification, and migration notes:
"BREAKING CHANGE:

'port-runner' command line option has changed to 'runner-port', so that it is
consistent with the configuration file syntax.

To migrate your project, change all the commands, where you use '--port-runner'
to '--runner-port'."
`);
  }
};

/**
 *
 */
const displayVersionCheatSheet = () => {
  const MMPString = "MAJOR".red + "." + "MINOR".blue + "." + "PATCH".magenta;

  console.info(`
Given a version number ${MMPString}, increment the:

${"MAJOR".red} version when you make incompatible API changes,
${
  "MINOR".blue
} version when you add functionality in a backwards compatible manner, and
${"PATCH".magenta} version when you make backwards compatible bug fixes.

${
  `Additional labels for ${"pre-release".bold.underline} and ${
    "build metadata".bold.underline
  } are available as extensions to the ${MMPString} ${"format.".green}`.green
}
`);

  console.info("See https://semver.org for more details.".yellow);
};

module.exports = {
  displayCommitCheatSheet,
  displayVersionCheatSheet
};
