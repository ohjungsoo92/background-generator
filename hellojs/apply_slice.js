function myFunction() {
    console.dir(arguments);

    var args = Array.prototype.slice(apply(arguments), 2);
    console.dir(args);
}

myFunction(1, 2, 3);