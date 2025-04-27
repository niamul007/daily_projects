const hero = ["Hulk","spiderman","superman"];

const heroPower = {
    hulk :"Strong",
    spiderman:" sting",
    super: "Maniac"
}


Object.prototype.hi = function (){
    console.log("Hi fuckers");
}

const userName = {
    name :" Niamul Hoque"
}

const userId =  {
    ID : 123523
}

const timing = {
     log : "12:30",
     logOut: "2:40"
}

Object.setPrototypeOf(timing,userName)

const str = " hey suckers  ";

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`Item length is : ${this.trim().length}`)
}

str.trueLenght();
"niamul hoque ".trueLenght();