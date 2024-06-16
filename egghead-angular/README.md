# EggheadAngular

Video series used was: [Angular Basics](https://egghead.io/courses/angular-basics-888f)

Had to do a bit of code modification since where wasn't a repository to check out.  Just trying to keep up on the fly as I watched the video.

This Angular version is clearly different and had to reference the documentation quite a bit in order to get some things working.

## Video 1
* Asked me much different questions on the set up, never asked about the router
* had to modify `templateUrl` and `styleUrl` back to original `template` and `style`

## Video 2
* Had to update the angular.json file to user the longer "@schematics/component..." in order to get the default set up no to use
* Took a while to figure out what was going on with the `ngOnInit` didn't get that until later in the video when it fully came on screen
* *ngFor had to be replaced with the post Angular 16 `@for` looping syntax with the `track` property, which I don't get that this juncture

## Video 3
* Typed my habit and had to use the "!" definite indicator so my linter stopped putting red squigglies on my code
* Realized I don't need the `constructor` on `ngOnInit` yet and it must be part of Author's configuration settings

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
