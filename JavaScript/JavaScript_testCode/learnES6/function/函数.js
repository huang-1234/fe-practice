function outer() {
    console.log('output the outer1');
    inner();
    console.log('output the outer2');
}

function inner() {
    console.log('output the inner1');
    console.log(arguments.callee.caller);
    console.log('output the inner2');
}
outer();