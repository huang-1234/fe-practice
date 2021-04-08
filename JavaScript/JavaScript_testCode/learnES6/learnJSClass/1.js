//Class
/* 1
class Person {
    constructor() {
        this.located = () => console.log('instance', this);
    }
    locate() {
            console.log('prototype', this);
        }
        // Defined on the Class
    static locates() {
        console.log('Class', this);
    }
}
let p1 = new Person();
p1.name = 'huang';
p1.sayName = function() {
    return this.name;
};
p1.sayName();
console.log(p1);
//
// let p = new Person();

// p.locate();
// Person.prototype.locate();
// Person.locates();
*/
//===================================
// The iterator and genarator of Class
class Person {
    constructor() {
        this.niname = ['Jack', 'huang', 'shui'];
    } * [Symbol.iterator]() {
        yield* this.niname.entries();
    }
}
let p = new Person();
for (let [id, niname] of p) {
    console.log(id, niname);
}