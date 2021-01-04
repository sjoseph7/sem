## sem-cs: semantic cheat sheet

A command line cheat sheet for semantic labelling.

### Install with:

`npm install sem-cs -g`

### CLI Options and Commands

```
Options:
  -V, --version     output the version number
  -h, --help        output usage information

Commands:
  commit|c [<tag>]  show semantic commit message cheat sheet
  ver|v             show semantic versioning cheat sheet
```

Demo:  

`> sem-cs v`
```
Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards compatible manner, and
PATCH version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

See https://semver.org for more details.
```

`> sem-cs c all`
```
Format:
<type>(<scope>): <subject>

<body>

<footer>

Example:
fix(middleware): ensure Range headers adhere more closely to RFC 2616

Add one new dependency, use 'range-parser' (Express dependency) to compute
range. It is more well-tested in the wild.

Fixes #2310

Types:
feat: A new feature
fix: A bug fix
docs: Documentation only changes
style: Changes that do not affect the meaning of the code (formatting, missing semi-colons, etc)
refactor: A code change that fixes no bugs and adds no features
perf: A code change that improves performance
test: Adds missing test(s)
chore: Changes to the build process or auxilliary tools and libraries like documentation generation

Footer:
Closed issues SHOULD be listed in the footer section as follows:
"Closes #234"
"Closes #123, #245, #992"

Breaking changes MUST be mentioned in the footer with a change description, justification, and migration notes:
"BREAKING CHANGE:

'port-runner' command line option has changed to 'runner-port', so that it is
consistent with the configuration file syntax.

To migrate your project, change all the commands, where you use '--port-runner'
to '--runner-port'."
```

Tags include:

- all
- format
- types (default)
- footer

### References:

- http://karma-runner.github.io/1.0/dev/git-commit-msg.html
- https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
- https://seesparkbox.com/foundry/semantic_commit_messages
- https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits
- https://github.com/commitizen/cz-cli
- https://semver.org/
