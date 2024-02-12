export {};
var message = "helloworld heroooo";
let isbeginner: boolean = true;
let total: number = 99;
let name: string = `hemlo ${message}`;
let list: number[] = [2, 3, 4, 2];
let li1: [string, number] = ["gg", 22]; //tuples are the good
enum color {
  r,
  g,
  b,
}
let k1: color = color.g;
let myvar: unknown = 11;

let a = 99; /// when initiziled it takes the type of data given and cant assign another type next time
//but if not initzed then it can take any type values
a = 10;
// a = "sjsj";/// this error was due to the above reasoning

let a1: number | boolean; // why use multitype over any type coz it has itellisense support
//when u use . operator it gives the methods to work but for any it doesnt work
a1 = 88;
a1 = false;

function add(num1: number, num2: number = 20): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  } // can add return type after args -- >> like this ( : type )
  ///in js we can call function without passing args it recieves undefined but in ts its not possuble
  //to make it possibke we can use ? after the input arg name
  //can use defalt value for the args
}
add(2, 4);
interface remo {
  firstname: string;
  secondname?: string;
}

function batman(person: remo) {
  console.log(`${person.firstname} ${person.secondname}`);
}

let p = {
  firstname: "bruce",
};
// batman(p);

class ironman {
  namee: string;
  constructor(num: string) {
    this.namee = num;
  }

  tony() {
    console.log(`hi all im ${this.namee}`);
  }
}

let b2 = new ironman("tonyystark");
b2.tony();
// console.log((myvar as Function)());
