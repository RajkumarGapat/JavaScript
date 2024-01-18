class A{
    display(){
        console.log("Welcome - A");
    }
}

class B extends A{
    display(){
            console.log("Welcome - B");
        }
    }
//var b = new B()
//b.display();

var objs = [new A(),new B()];
objs.forEach(function(msg){
    msg.display();
})