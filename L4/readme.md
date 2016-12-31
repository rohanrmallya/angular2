## And, it clicked!

We currently have a list of users we have shown. Let's see how to handle a click event. An event is represented (or should I say "binded") between paranthesis like so :

`(event)`

Now, we want to handle the `click` event, on the list items <li>. We can do so like this :

`<li (click) = "runThisFunction(withThisParameter)">`

We have to **export** the function runThisFunction under our exported class like so:

```
runThisFunction(param){
  // Do Something
}

```

## In Our Code ..

Our intention is to display details of a selected user on the right side. So, we first export a variable called `selected`.

We handle the click event using event binding on the <li> where we have our for loop to loop through the `userList`.
On click, we run the function changeActive() which takes in a parameter that is that particular user in that loop (which is oneUser). In short, we write the event binding like so :

`changeActive(oneUser)`

So, for every item that is created with the loop, the event binding is added. To reduce it to the simplest bit, the loop runs 1 time, creates the <li> for User1 and adds the event binding for User1. This repeats multiple times

# Changing Property of the clicked item

So, Everytime I click on the particular user, I want that clicked user to be highligted. We use something called property binding to achieve the same.

Let's say, everytime I have an activeUser, I want my code to apply the class `active` to the element containing that user. I can use property binding like so :

`[class.active] = "oneUser === activeUser"
`

Now, this will go in the <li> tag along with the event-binding.

How to read this is, "a class `active` is applied to that particular <li> where oneUser is equal to activeUser (or where the expression `oneUser === activeUser` returns `true`)"

## Misc.

Note : There is no ngElse statement in Angular2. So, if I want to display some message in the `jumbotron` if no user is selected I can do so by the condition `*ngIf = "!activeUser"`
