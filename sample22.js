function Person(){
    this.name = 'Raj',
    this.age = 24
}

let p1 = new Person();
let p2 = new Person();

Person.prototype.gender = 'Male';  //Added new property Gender..

console.log(p1.gender);
console.log(p2.gender);
console.log(p1);


