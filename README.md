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

`> sem-cs c`
```
Types:
feat: A new feature
fix: A bug fix
docs: Documentation only changes
style: Changes that do not affect the meaning of the code (formatting, missing semi-colons, etc)
refactor: A code change that fixes no bugs and adds no features
perf: A code change that improves performance
test: Adds missing test(s)
chore: Changes to the build process or auxilliary tools and libraries like documentation generation
```

`> sem-cs v`
```
Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards compatible manner, and
PATCH version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

See https://semver.org for more details.
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
