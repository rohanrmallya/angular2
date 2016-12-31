# First Angular app

1. Create a file in app called `app.component.ts`
2. `npm start` in the command line

In the app.component.ts

  * import { Component } from '@angular/core';

    We have imported the component from angular/core
    We can now use the Component decorator like so

    ```
    @Component({
        // Code goes here

        selector: 'foo'
        // We call it using <foo> </foo>

        template: `
          <div class = "jumbotron">
            <h1> Testing Foo </h1>
          </div>
        `,
        // Templace goes above.
        // Backticks are used for multiline templates

        styles: [
          `.jumbotron {
              color:red;
            }`
        ]

        // Styles is CSS
      })

    export class AppComponent {

      //Code goes here
    }

    ```

## BootStrapping

1. Create a new file called `app.module.ts`
2. Module is used to encapsulate all different parts of app into one cenral place.
3. We can have multiple modules for multiple sections of our site.

4. Code :

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// AppComponent is that thing which we have exported in our app.component.ts

// We can omit .ts extension in last import

@NgModule({
    imports: [BrowserModule],
    declarations : [AppComponent],
    bootstrap : [ AppComponent ]
  })

// We need the BrowserModule, we add that to the import array
// We have our AppComponent that we formed, we need to declare that and bootstrap it and hence in the declarations and bootsrap array
// Bootstrapping means we are going to pack it and use it in our application

export class AppModule{

}


```

5. Now to use it in our app, we are going to create a file called `main.ts` under the `app` folder

6. `main.ts`:

```
  import { platformBrowserDyamic} from '@angular/platform-browser-dynamic';
  import { AppModule } from './app.module';

  platformBrowserDynamic().bootstrapModule(AppModule);
```

7. Make changes to the template and styles of `app.component.ts` and verify the change

8. Inside our exported class, we can export something and use that in our template. For example, lets say we export a string called "Hello Foo 1!" like so

`export class AppComponent{
  helloFoo1 = "Hello Foo 1!"
  }`

  We can use this in our template like so :

  `<p> {{helloFoo1}} </p>` 
