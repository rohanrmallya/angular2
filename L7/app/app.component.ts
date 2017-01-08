import { Component } from '@angular/core';
import {UserModel} from './shared/models/user';

@Component({
    // Code goes here

    selector: 'foo',
    // We call it using <foo> </foo>

    // template: `
    //
    // `,

    // styles: [
    //     ``
    // ]
    templateUrl : './app/app.component.html',
    styleUrls : ['./app/app.component.css']
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
