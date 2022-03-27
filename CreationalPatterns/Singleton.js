/*
In JS, singleton pattern can be made with Object Literal (No constructors)


const mjolnir = {
  power: 10000,
  currentOwner: {
    name: 'Thor',
    power: 10000
  },
  setNewOwner: function(challenger) {
    if (challenger.power > 10000) {
      alert(`currentOwner changed : ${challenger.name}`)
      this.currentOwner = challenger
      this.power = challenger.power   
  }
}
*/

/*
In Singleton,
Encapsulation is important
*/

const encapsulatedMjolnir = (function() {
  let instance;
  let currentOwner = {
    name: 'Thor',
    power: 10000
  }
  
  let power = currentOwner.power

  function initiate() {
    return {
      power: power,
      currentOwner: currentOwner,
      setNewOwner: function(challenger) {
        if (challenger.power > 10000) {
          alert(`currentOwner changed : ${challenger.name}`)
          this.currentOwner = challenger
          this.power = challenger.power   
        }
      }
    }
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = initiate()
      }
      return instance
    }
  }
})()

const first = encapsulatedMjolnir.getInstance()
const second = encapsulatedMjolnir.getInstance()
//console.log(first === second); 


export { encapsulatedMjolnir}