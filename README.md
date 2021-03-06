# Ngmaterialnavbar01

This is an Angular/Material version 8, app that has a main-nav with "Home, Weather and My API" components as menu items. Weather component provides a select option with 3 cities name to view the current temperature and weather text "cloudy, sunny etc.".The WeatherData service using HttpClientModule connects to the AccuWeather API to get the weather information.

Replace the apikey value in the /src/app/weather-data.service.ts with a valid one for the app to work.
```code:ts
 private _apiKey: string =  "?apikey=Replace_with_a_valid_apikey_from_AccuWeather";
```
![ng8App - home component](../assets/ng8app-home.png) ![ng8App - api component](../assets/ng8app-api.png) 

![ng8App - api component](../assets/ng8app-weather-default.png) 

![ng8App - api component](../assets/ng8app-weather-menu_options.png) 

![ng8App - api component](../assets/ng8app-weather-menu_options-NewYork.png) ![ng8App - api component](../assets/ng8app-weather-menu_options-Chicago.png) ![ng8App - api component](../assets/ng8app-weather-menu_options-LosAngeles.png) 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
