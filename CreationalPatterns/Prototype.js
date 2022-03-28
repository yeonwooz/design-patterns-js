/*
The concept is to copy an existing object rather than creating a new instance from scratch.

원본객체의 prototype 에 메소드를 정의하고 공유해서 사용함으로써 메모리효율을 높인다.
클래스 기반 언어에서는 clone메소드로 공통메서드를 정의해주어야 하지만, 
프로토타입 기반 언어에서는 clone메소드를 만들지 않고 prototype 객체를 활용할 수 있다.
*/

const IronManSuit = function(name) {
  this.name = name
  this.height = 173
  this.power = 'off'
  this.mode = 'manual'
  this.speed = 0
  this.hp = 10000000
}

IronManSuit.prototype = {
  height: 173,
  launch() {
    this.power = 'ON'
    alert('power on')
  },
  boostUp() {
    this.speed += 10000
  },
  punch(target) {
    target.hp -= 5000
  },
  autoMode() {
    this.mode = 'auto'
    alert("Jarvis controls the suit.")
  }
}

const markI = new IronManSuit()
const markII = new IronManSuit()

markI.boostUp()
markI.boostUp()

console.log(markI.boostUp === markII.boostUp)
export {IronManSuit}