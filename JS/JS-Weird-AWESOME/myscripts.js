/*
  - First Class Functions
  - Event-Driven Environmont
  - Closures
  - Scope === variable access
  - Context === this
*/

/*==================First Class Functions===============================*/

function add(first, second, callback){
  console.log(first + second);
  if (typeof(callback) === 'function') {
    callback();
  }
}

add(2,3, ()=>{
  console.log('DONE!!!');
});
add(12,21,()=>{
  console.log('DONE AGAIN!!!');
});

/*===================Event-Driven Environmont===========================*/
// it runs and sets value in memory.

/*====================Closures=========================================*/

/*====================Scopre=========================================*/
var a = 1;
function foo(){
  var a = 2;
  console.log(window.a);
  console.log(a);
}
foo();
// call, apply, bind

//==================Generator=============================*/

var myGen = function*(){
  var one = yield 1;
  var two = yield 2;
  var three =  yield 3;
}

var gen = myGen()
console.log(gen.next());
