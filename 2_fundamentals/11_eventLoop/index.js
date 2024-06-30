function a1() {
  console.log("Executing a1()");
}

function b2() {
  console.log("Executing b2()");
}

function c3() {
  console.log("Executing c3()");
  a1();
  b2();
}

c3();
