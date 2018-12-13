# DsWeb - Staging

This project is the staging repository for the official website. All changes should be made within a branch here before deployment to the website repository.

## Development

This project is built with the latest Angular Cli: Angular 7. Install the following packages locally before making modifications:
- [Node.js](https://nodejs.org/en/) 10.x
- [Angular Cli] 7 `npm install -g @angular/cli`

Run `ng serve` or just `ng s` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `docs/` directory. Use the `--prod` flag for a production build.

Run the following for building files for github pages:
`ng build --prod --output-path docs --base-href \_staging\`
`cp docs/index.html docs/404.html`

Then commit to the repository like you normally do.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
