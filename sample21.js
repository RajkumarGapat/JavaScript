function Person(pname,page,pgender){
    this.name = pname;
    this.age = page;
    this.gender = pgender;
    this.greet = function(){
        return('Hi' + ' ' +this.name);
    }
}

const p1 = new Person('John',24,'Male');
const p2 = new Person('Sara',25,'Female');

console.log(p1.name);
console.log(p2.name);
//p2.greet();
console.log(p2.greet());


