import { Component } from '@angular/core';
@Component({
    // Code goes here

    selector: 'foo',
    // We call it using <foo> </foo>

    template: `

      <!--header-->
      <header>
        <nav class = "navbar navbar-inverse">
          <div class = "navbar-header">
            <a href="/" class="navbar-brand"> Testing Foo </a>
          </div>
        </nav>
      <main>
        <div class = "jumbotron text-center">
          <h1> Hi Foo! </h1>
          <h4> {{ helloFoo1 }} </h4>
        </div>

          <div class = "well">
            <h1> Showing only 1 user </h1>
            <p> Name : {{registeredUser.name}}</p>
            <p> Email : {{registeredUser.email}} </p>
          </div>

          <div *ngIf = "show == 1">
            <div class = "well">
              <h1> Using a loop to loop over a list </h1>
              <div *ngFor = "let oneUser of userList">
                <p>{{oneUser.id}}.  Name : {{oneUser.name}}<br> Email : {{oneUser.email}}</p>
              </div>
            </div>
          </div>
      </main>
      <footer class="footer text-center">
        textBurger Creations &copy; 2017
      </footer>
    `,

    styles: [
      `.jumbotron {
          background:#FFC107;
        }

        .navbar-inverse{
          background:orange;
          border:none;
        }

        .footer{
          background:#E0E0E0;
          padding:2%;
        }`
    ]
  })

export class AppComponent {

  //Code goes here
  helloFoo1 = "Hello Foo 1!";
  registeredUser = {
    name: 'Text Burger',
    email : 'textburger@gmail.com'
  };

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

  // show = 0;
  show = 1;
}
