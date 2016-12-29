# Setting up Angular dependencies

ES6 has some amazing features that the browsers do not support. Simply put, setting up these dependencies will help browsers take full advantage of the ES6 features.

## What we need?

* **Core JS Shim**
* **Zone.js** - Helps in Error Tracking via Console
* **Reflect Metadata** - Allows us to create decorator metadata
* **RxJS** - Set of libraries to make our app reactive.
* SystemJS - Helps load different module across different files

## Commands

1. ` cd to/your/folder`
2. `npm install core-js reflect-metadata zone.js systemjs`
3. `npm install rxjs@5.0.1`

    At the time of writing this tutorial, 5.0.1 was the latest version of rxJS. Please check the latest version in the package.json of the quickstart guide [here](https://github.com/angular/quickstart/blob/master/package.json)

##

## Angular Packages

* @angular/core
* @angular/common
* @angular/compiler
* @angular/paltform-browser
* @angular/platform-browser-dynamic

### Commands

`npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic --save`

## Misc Angular packages

* @angular/http
* @angular/forms
* @angular/router
* @angular/upgrade


### Commands

`npm install @angular/http @angular/forms @angular/router @angular/upgrade --save`

You can just copy the `package.json`, `tsconfig.json` and `typings.json` into your project folder and do `npm install` to load up all packages.

We need to configure systemjs to finalize our starter pack.

# systemjs

## Why?

* To make import statements work
* To let browser use such ES6 features.

## Configuring

Writing the whole thing is a mess. So, I copied the systemjs.config.js from the Angular Docs. You can copy that from [here](https://raw.githubusercontent.com/angular/quickstart/master/systemjs.config.js)

The "map" variable tells systemjs where to look for things when loading

## index.html (remember that?)

We need to do the following :

   * Load the dependencies
   * load our angular app with systemjs

```
    <!-- loading dependencies -->

    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>

    <!-- loading our angular app with systemjs -->

    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="systemjs.config.js"></script>

    <script>
      // Loading up packages. If err, logging err
      System.import('app').catch(function(err){console.log(err);})
    </script>

```
