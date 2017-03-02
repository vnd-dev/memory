function foo(arg) {
    // this bar is basically getting created on window object: window.bar
    bar = "this is a hidden global variable";
}
//foo instantiated on window directely
foo();


function foo1(){
  // this bar1 will also be available on window object simmilar to window.bar1
  this.bar1 = "accidental global variable...!!"
}
//foo1 instantiated on window directely
foo1();


function foo1(){
  // this will appear inside the window.myObj.bar2
  this.bar2 = "accidental global variable...!!"
}
var myObj = new foo2();
