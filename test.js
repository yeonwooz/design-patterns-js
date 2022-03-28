class TestClass {
  constructor() {
    console.log(11111, this)
  }
}

const TestFunc = function(){
  console.log(22222, this)
}

// new TestClass()
// new TestFunc()
// console.log(new TestClass())
// console.log(new TestFunc())

export {TestClass, TestFunc}