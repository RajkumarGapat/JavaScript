const person = {
    name: 'John',
    age:30,
    greet: function(){console.log('Name is:' + ' ' + this.name)},
    greet: function(){console.log('Name is:' + ' ' + person.name)}

}

person.greet(),
person.greet();