1. `touch index.html`

  * Make some changes to the index.html
  * CDN : https://www.bootstrapcdn.com/bootswatch/

2. `npm init`

    * You get a package.json
    * package.json has a scripts field
3. `npm install lite-server --save-dev`

    * What the dev does is in the package.json it puts the script   under devDependencies
    * In the package.json under scripts add this
        * "lite" : "lite-server"
    * Command to run the lite server is "npm run lite"

4. `npm install --save-dev typescript typings`

  * Installs typescript and typings
  * Typings : TS uses this to understand how the external libraries are used

5. `touch tsconfig.json typings.json`

  * config files

6. Open `tsconfig.json`, add the below :

  ```
  {
    "compilerOptions": {
      "target" : "es5",
      "module" : "commonjs",
      "moduleResolution" : "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "expertimentalDecorators": true,
      "removeComments": false,
      "noImplicitAny": false
    }
  }

  ```

7. `npm install -g typings`

    * Installs typings globally
    * -g flag tells npm that the module must be accessible globally

8. `typings install dt~core-js dt~jasmine dt~node --save --global`

  * Tells Typescript about the packages jasmine, node and core-js

9. Add these to package.json in the scripts property

  ```
    "tsc" : "tsc",
    "tsc:w": "tsc -w",
    "typings": "typings",
    "postinstall": "typings install""
  ```

    * tsc -w : Watch Mode. Automatically watches for changes and refreshes
    * postinstall : If we do not have typings set up, this command will do it for us
    * We add these so that, you can clone this repo on your machine which has node and npm and just do `npm install` to get all the dependencies up and running

10. `nom install concurrently --save-dev`

  * concurrently helps run two packages parllely.
  * We need this to run lite-server and tsc -w together

11. Add this to package.json

  `"start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite",
`

  * Usage : npm start
