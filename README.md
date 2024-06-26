# Egghead Angular Basics

Video series used was: [Angular Basics](https://egghead.io/courses/angular-basics-888f)

Had to do a bit of code modification since where wasn't a repository to check out.  Just trying to keep up on the fly as I watched the video.

The Angular versions for the tutorial are different from what I checked out from npm:

|          | Angular | Compiler | CLI    |
|----------|---------|----------|--------|
| Tutorial | 8.0.0   | ~7.0.2   | ~7.0.2 |
| My Repo  | ^18.0.0 | ^18.0.4  | ^18.0.0|

As a result I have had to reference the documentation quite a bit in order to get some things working.

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

## Video 4

Had to read up on the differences for the typed Form* features for the updated version of Angular.   But it was a good reminder/exercise in type awareness and management.  

I added the app.module.ts though I'm not entirely sure it was required.

## Video 5
Added in the event listener from child to parent.  Didn't have to do anything extra on this one.  I did pass just the string so my typing is a bit different.

## Video 6
Decided to go with stronger typing than given in the tutorial.  Had to update a couple of other files and create the `Habit` interface as well.  Decided to put that in with the `HabitService` that was created with this step.

Angular 18 didn't immediately give access to the ` | async` as mentioned in the video so I went ahead and took a shot at using the `OnDestroy` interface and how I might manage the subscriptions.  Will be interesting to see if this bites me later on in the tutorial if/when the form gets unmounted.  

## Video 7
I was already doing a lot of typing.  Basically just had to move the `Habit` interface into the `habit.ts` file and update the imports using the `ng g i habit` command in the CLI

## Video 8
Got the Observable/async issue sorted out since it was necessary for the `pipe` function utilized in the tutorial

## Video 9
Scoped styling seems interesting in lieu of JSS

## Video 10
Putting styles in the main styles.css per tutorial

## Video 11
Had to do a quick Googling to figure out the `app.config.ts` providers addition that was needed for Angular 18 Web Client.
There was a "quickly added and Express" server that could have been explained or at least mentioned to get the code for that change.

## Video 12
Several key changes were hand-waived at the jump.  Had to go in and find the changes that were in place for the server and the addition of the "Post" call in the server.  Also had to update the `habit.service` to make the post call.  Hadto use `subscribe` in addition to the `pipe` as referenced in the tutorial code.  If I didn't then the call wouldn't make it over to the API.

There is probably some clean up that needs to be included here since there is a `subscribe()` happening

## Video 13
Whooo!  New app for dealing with routing! Doesn't build upon the previous habits app.  Was able to deal with it, just took a minute to figure out what happened to what use to be there!

Since my inital creation didn't give me the option to NOT have routing it was already in place. Was able to create some basic routing like the tutorial said and then connect the previous "habits" app to the `/habits` route after updating the default `app.components.ts` page to use the `<router-outlet />` tag.

## Video 14
Made quick and dirty Nav for the routing.  Glossed over the inclusion of the `RouterLink` to make that part work on the `<a>` tag for the nav.  
Had no idea about the built in Emit (sp?) into vs code thought that was cool

Updated the `app.component.ts` to use a template file instead of built in.  I like that a lot better.  Sam Julien switched to this style with the Router app.

## Video 15
Adding parameters to route.  Some minor typing differences

## Video 16
subscirbing to routes

## Video 17
Nested Routes.  Another Pivot from the First Router to the Camping planner.
Made a simple sub-route using pages we already had by moving the habits into a subroute of the "Accoumnt" component.
Was ableto duplicate the majority of the functionality without needs to copy all of the code

## Video 18
Accessing parent route parameters to show data.  There was a lot of data that was in subsequent files so went for reinforcement instead.  

### Server
Updated the server to have an `Account` api that could be accessed from the app.  Should have picked something else for clarity but just C&P the data structure for habits and created info/habits data for 3 different accounts.  Built the basic endpoints to grab the data from the express server.

Created a Bruno collection for quick testing the Express server when I had completed the account endpoints
Currently there are no mutations on the account end point.

### App
The app I had to add a new `account.service.ts` file as well as updating the routes and the account-based components.  I created a new account-habits components that leveraged the `habits-list` template once I broke it out into an HTML file.  Had compilation issues with the form part of the list so I just commented that out for the time being.  I did try adding a common setting across the components `showForm` and using `@if` to conditionally show, but it didn't matter.  This was a full crash of the server and it would not run at all.

## Video 19
Moving to having the parent routes always passed through.  Was able to figure out how to get the setting into the `app.config.ts` instead of the `app.module.ts` as was done in the tutorial

## Fin.

--------------------------------------

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
