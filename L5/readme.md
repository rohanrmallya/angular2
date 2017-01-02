## Typesafety

We had seen what Type Safety is in the Typescript excercise. We can extend the same idea to our userList. Our User object consists of an id (of type Integer), a name and email of type string. We can model this user to ensure type safety

We have to export a class with the types defined first. Let's say I call my class `userModel`. I export the class in the beginning and not in the AppComponent class like so :

```export class UserModel{
  id: number;
  name: string;
  email: string;

}```

Now, we have to ensure type safety on userList. In our AppComponent that we export, we have userList. Just add a `: userModel[]` in front of itthe definition like so :

```userList:UserModel[] = [
  {// obj1},
  {// obj2}
]```

And, aciveUser is of type userModel. This can be done like so :

`activeUser:userModel`

## Refactoring

Under the `app` folder, create a folder called `shared` under which create another folder called `models`.

In this newly created folder, create a file called `user.ts`

And throw the `export class UserModel{ // code }` there.

In your `app.component.ts`, you can now `import` your userModel model by doing this :

`import { UserModel} from ./shared/models/user`
