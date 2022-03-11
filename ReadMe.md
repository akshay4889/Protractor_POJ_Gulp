# Protractor Framework

Used Gulp, Protractor and Jasmine to create the hybrid framework.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install packages.

```bash
npm install
```
## Webdriver manager update

webdriver_update task is set to update the webdriver manager.
```bash
gulp webdriver_update
```

## Executing the test specs using gulp

Default task is set with execution of seabourn test specs.
```bash
gulp
```

run_holland_specs task is set with execution of hollandamerica test specs.
```bash
gulp run_holland_specs
```

run_seabourn_specs task is set with execution of seabourn test specs.
```bash
gulp run_seabourn_specs
```

## Executing the test specs using npm

To run hollandamerica test specs.
```bash
npm run holland
```

To run seabourn test specs.
```bash
npm run seabourn
```