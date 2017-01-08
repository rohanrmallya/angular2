## Event Binding v/s Property Binding.

Event Binding - **()**
Property Binding - **[]**

A throwback to the time we discussed the two :

An example for event binding is `(eventName) = "runThis()"`.
This piece of code listens to event `eventName` and when it registers the event, the function `runThis` is called

An example for property binding is `[class.className] = "someVariable === 1" `
This piece of code checks the value of someVariable and when the variable is 1, the expression "someVariable === 1" returns `True` and this the class `className` is applied wherever we have the binding set

## Two-Way Data Binding.

You can have a property binding and an event binding together. An example to illustrate where this is useful is described below.

We have a list of users on the left and in our `jumbotron` we are displaying the name's of these users on click. Let's say we allow the names in the `jumbotron` to be changed and with this change, the name in our left-pane must also change. We can achieve this through two way data binding.

Syntax : `[(ngModel)]`

Remember : `([ngModel])` won't work and is **NOT** the same as `[(ngModel)]`

Tip to remember : Banana-in-a-box. The banana () is in the box [ ].

## Achieveing Two-way data binding.

Since Angular2 is modular, we can import stuff when we need them. In order to achieve two-way binding, we have to import the FormsModule. So, in your `app.module.ts`, we have to import the module and add it to the `imports` array.

We import the FormsModule with :

```
import { FormsModule } from '@angular/forms'

```

After this just populate the `imports` array with FormsModule. Your `imports` array under /@NgComponent must look like this :

``` 
imports: [ BrowserModule, FormsModule],

```

------------

In `app.component.ts`, under our `jumbotron` class, we add an input field like so

`<input [(ngModel)]="activeUser.name">`

This way, in the <input> field, the name of the activeUser is shown. Changing the name here will change the name in the list too.

## Some Minor Changes

Now, in the `app.component.ts`, we can see that our template and styles are taking up considerable space. It would be a boon if we could put just the template outside the component, and the stylesheet outside the component and reference them from inside the component. The steps to do the same are described below :

Create 2 files under `app` folder called `app.component.html` and `app.component.css`

Whatever is there in the back-ticks under `template` copy and paste that onto `app.component.html`.
Whatever is there in the array `styles`, copy and paste taht onto `app.component.css`.
Note, if you have multiple elements in the `styles` array, then you have to put the CSS onto separate files

Now, remove the `template` and `styles` property.

Replace them with this

```
templateUrl : './app/app.component.html',
styleUrls : ['./app/app.component.css']

```

If you have multiple stylesheets, then the `styleUrls` array will have multiple elements where every element is the location to one stylesheet.

The above two lines will repalce `template` and `style`

## Extra Reading

All the nomenclature that I follow is from the Angular2 Style Guide. That is the reason my files are named in the fashion that they are. The styleguide is available [here](https://angular.io/styleguide)
