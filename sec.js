"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "helloworld heroooo";
var isbeginner = true;
var total = 99;
var name = "hemlo ".concat(message);
var list = [2, 3, 4, 2];
var li1 = ["gg", 22]; //tuples are the good
var color;
(function (color) {
    color[color["r"] = 0] = "r";
    color[color["g"] = 1] = "g";
    color[color["b"] = 2] = "b";
})(color || (color = {}));
var k1 = color.g;
var myvar = 11;
var a = 99; /// when initiziled it takes the type of data given and cant assign another type next time
//but if not initzed then it can take any type values
a = 10;
// a = "sjsj";/// this error was due to the above reasoning
var a1; // why use multitype over any type coz it has itellisense support
//when u use . operator it gives the methods to work but for any it doesnt work
a1 = 88;
a1 = false;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    } // can add return type after args -- >> like this ( : type )
    ///in js we can call function without passing args it recieves undefined but in ts its not possuble
    //to make it possibke we can use ? after the input arg name
    //can use defalt value for the args
}
add(2, 4);
function batman(person) {
    console.log("".concat(person.firstname, " ").concat(person.secondname));
}
var p = {
    firstname: "bruce",
};
// batman(p);
var ironman = /** @class */ (function () {
    function ironman(num) {
        this.namee = num;
    }
    ironman.prototype.tony = function () {
        console.log("hi all im ".concat(this.namee));
    };
    return ironman;
}());
var b2 = new ironman("tonyystark");
b2.tony();
// console.log((myvar as Function)());
