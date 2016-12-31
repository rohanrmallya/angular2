## Going through features of Angular2

We learnt how to export stuff and use them in our template, let's now export some other things.

1. Under the `export class AppComponent`, we shall put a list of registered members like so

```

  registeredUser = {
    name: 'Text Burger',
    email : textburger@gmail.com
  }
```
2. Show that in the application by puting this under the template

```
<p> Name : {{registeredUser.name}} </p>
<p> Email : {{registeredUser.email}} </p>

```

3. Showing a single user never serves our purpose unless your website has one user. So, we would likely need to show a number of users. We can do that by exporting a list of objects where the objects are the users. Something like this

```
userList = [
  {
    id: 1,
    name: "User 1",
    email : "user1@email.com"
  },

  {
    id: 2,
    name: "User 2",
    email : "user2@email.com"
  }

];
```

4. Now in our template we have to loop over the exported list like so :

```
<div *ngFor = "let oneUser of userList">
  {{oneUser.id}}.   {{oneUser.name}} - {{oneUser.email}}
</div>

```

5. THe "\*" lets us know that this is a template driven part. Angular2 will evaluate whatever is there in the star.

6. Similarly, we have \*ngIf.

  To demonstrate this, I will export a variable called show like so

  `show = 0`

  Now, I want the user list to show only if show if 1.
  I handle that like so :

  ```
  <div *ngIf= "show == 1" >
    <!-- the *ngFor goes here -->
  </div>

  ```

  Point to note : You need not use {{}} in the ngIf expression

  ## Clean App Folder!!

  1. In your `tsconfig.json`, add the below as a property to "compilerOptions":

  ```
  "outDir" : "misc"

  ```

  Now, All your .js and .js.map files are moved to the `misc` directory. We can now throw them out of our `app` directory.

  2. To get this working, we have to modify our systemjs.config.js. If you observe, we load up "app" in our index.html with this line

  ```
  System.import('app').catch(function(err){console.log(err);})

  ```
  And this looks into systemjs.config.js where we have "mapped" app to "app". We just change this to the `misc` folder now
