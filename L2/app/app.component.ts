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

      <div class = "jumbotron text-center">
        <h1> Hi Foo! </h1>
        <h4> {{ helloFoo1 }} </h4>
      </div>

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
}
