## Making our code more "Modular"

Currently, in our application, see a list and a jumbotron. It is good practice to make your app as modular as possible. The top-view of what I am going to do is this :

I will have the `jumbotron` in another component and call it `display`.

Following the stleguides, We create a folder under `app` folder called `display-users`

In this folder, we will have hour `display-users.component.ts` and `display-users.component.html`.

In our TS file, we need to import component and write our display component just like in the `app.component.ts`.

```
import { Component } from '@angular/core';

@Component({
  selector: 'display-users',
  templateUrl : './app/display/display.component.html',
})

export class DisplayComponent{

}

```
Cut the relavent `jumbotron` part from the `app.component.html` and paste it onto `display.component.html`

Instead of the cut part, we have to put a selector there. Our selector is `display-users` and hence, we replace the cut part in `app.component.html` with `<display-users></display-users>`


----------------


Next, We have to tell the app.module.ts about our new selector. How do we do that?

1. We import our Component into `app.module.ts` by adding this :

```

import {DisplayComponent} from './app/display-users/display-users'

```

## But this doesn't work!

Why?

Observer `display-users.component.html`. We are using an `*ngIf` statement and asking it to validate a condition. But this piece of code does not know what activeUser is.

We have to pass this info from the parent (app component) to the child (display-users component). We use /@input by exporting it in the DisplayUsersComponent like so.

import Input from @angular/core in display-users.component.ts like so :

```

import {Input} from @angular/core;

```

In the exported class of display-users, we will have this

```

@input() childActiveUser : User;

```

Since we have used the User model that we created before, we have to also import User from '../app/shared/models/user'`

For the final step, in our `app.component.html`, where we have our <display-users>, I will use one-way data binding to let my child know that every time it sees the word  `activeUser` in `display-users.component.html`, it is the `activeUser` in `app.component.html` like so :

```
<display-users [childActiveUser] = "activeuser"></display-users>

```
