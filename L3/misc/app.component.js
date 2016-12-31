"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        //Code goes here
        this.helloFoo1 = "Hello Foo 1!";
        this.registeredUser = {
            name: 'Text Burger',
            email: 'textburger@gmail.com'
        };
        this.userList = [
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
        this.show = 1;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        // Code goes here
        selector: 'foo',
        // We call it using <foo> </foo>
        template: "\n\n      <!--header-->\n      <header>\n        <nav class = \"navbar navbar-inverse\">\n          <div class = \"navbar-header\">\n            <a href=\"/\" class=\"navbar-brand\"> Testing Foo </a>\n          </div>\n        </nav>\n      <main>\n        <div class = \"jumbotron text-center\">\n          <h1> Hi Foo! </h1>\n          <h4> {{ helloFoo1 }} </h4>\n        </div>\n\n          <div class = \"well\">\n            <h1> Showing only 1 user </h1>\n            <p> Name : {{registeredUser.name}}</p>\n            <p> Email : {{registeredUser.email}} </p>\n          </div>\n\n          <div *ngIf = \"show == 1\">\n            <div class = \"well\">\n              <h1> Using a loop to loop over a list </h1>\n              <div *ngFor = \"let oneUser of userList\">\n                <p>{{oneUser.id}}.  Name : {{oneUser.name}}<br> Email : {{oneUser.email}}</p>\n              </div>\n            </div>\n          </div>\n      </main>\n      <footer class=\"footer text-center\">\n        textBurger Creations &copy; 2017\n      </footer>\n    ",
        styles: [
            ".jumbotron {\n          background:#FFC107;\n        }\n\n        .navbar-inverse{\n          background:orange;\n          border:none;\n        }\n\n        .footer{\n          background:#E0E0E0;\n          padding:2%;\n        }"
        ]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map