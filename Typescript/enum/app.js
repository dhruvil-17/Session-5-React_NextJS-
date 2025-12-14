"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Directions;
(function (Directions) {
    Directions["UP"] = "UP";
    Directions["DOWN"] = "DOWN";
    Directions["LEFT"] = "LEFT";
    Directions["RIGHT"] = "RIGHT";
})(Directions || (Directions = {}));
// Accessing values:
let userDirection = Directions.UP; // userDirection is 0 at runtime
console.log(userDirection);
console.log(Directions.LEFT); // logs 2
//# sourceMappingURL=app.js.map