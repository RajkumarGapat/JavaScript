function person(){
    this.name = 'John',
    this.age = 30,
    this.greet = function(){
        console.log('WElcome')
    }
    this.msg = function(){
        return "hello"
    }
}

const p1 = new person();
const p2 = new person();
console.log(p1.name);
console.log(p2.name);
//console.log(p2.greet());
p2.greet();
console.log(p2.msg());