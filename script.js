import { encapsulatedMjolnir } from './CreationalPatterns/index.js'
import { Convert } from './CreationalPatterns/index.js'
import { Spidey } from './CreationalPatterns/ObjectInitializerPatterns/index.js'
import { IronMan } from './CreationalPatterns/ObjectInitializerPatterns/index.js'



console.log(Spidey)
console.log(Spidey.skills)

console.log(IronMan)
console.log(IronMan.skills)

console.log(new Convert(3).toString())