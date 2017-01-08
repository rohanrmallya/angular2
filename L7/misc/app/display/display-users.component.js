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
var user_1 = require("../shared/models/user");
var DisplayComponent = (function () {
    function DisplayComponent() {
    }
    return DisplayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.UserModel)
], DisplayComponent.prototype, "user", void 0);
DisplayComponent = __decorate([
    core_1.Component({
        selector: 'display-users',
        template: "\n  <div class = \"jumbotron text-center\">\n    <div *ngIf = \"user\">\n      <h1> Hi {{user.name}}! </h1>\n      <h4> eMail : {{user.email}} </h4>\n      <input class = \"myForm\" [(ngModel)] = \"user.name\">\n  </div>\n  </div>",
    }),
    __metadata("design:paramtypes", [])
], DisplayComponent);
exports.DisplayComponent = DisplayComponent;
//# sourceMappingURL=display-users.component.js.map