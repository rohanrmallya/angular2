import { Component } from '@angular/core';
import {UserModel} from './shared/models/user';

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
        <div class = "row">
          <div class = "col-sm-4">
            <div *ngIf = "show == 1">

                <h1> Students </h1>
                <ul class="list-group userList" >
                  <li
                    class="list-group-item"
                    *ngFor = "let oneUser of userList"
                    (click) = "changeActive(oneUser)"
                    [class.active] = "oneUser === activeUser">
                  Name : {{oneUser.name}}<br> Email : {{oneUser.email}}
                  </li>
                </ul>
            </div>
          </div>

          <div class="col-sm-8">
            <div class = "jumbotron text-center">
              <div *ngIf = "activeUser">
                <h1> Hi {{activeUser.name}}! </h1>
                <h4> eMail : {{activeUser.email}} </h4>
              </div>

              <div *ngIf = "!activeUser">
                <h1> Choose A User </h1>
              </div>
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
        }

        .userList li{
          cursor:pointer;
        }

        .active{
          background:orange;
          color:white;
        }`
    ]
})

export class AppComponent {

    //Code goes here
    helloFoo1 = "Hello Foo 1!";
    registeredUser = {
        name: 'Text Burger',
        email: 'textburger@gmail.com'
    };

    userList:UserModel[] = [
        {
            id: 1,
            name: "User 1",
            email: "user1@email.com"
        },

        {
            id: 2,
            name: "User 2",
            email: "user2@email.com"
        }

    ];

    // show = 0;
    show = 1;
    activeUser:UserModel;
    changeActive(user) {
        this.activeUser = user;
      //  this.activeUser = 123456; <- Will give error on the IDE
        console.log(this.activeUser);
    }
}
