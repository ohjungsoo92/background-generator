function Person(name, age, gen) {
    this.name = name;
    this.age = age;
    this.gen = gen;
}

var foo = {};

Person.apply(foo, ['foo', 23, 'girl']);
console.dir(foo);