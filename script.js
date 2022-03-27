import { encapsulatedMjolnir } from './CreationalPatterns/index.js'
import { Convert } from './CreationalPatterns/index.js'
import { Spidey } from './ObjectInitializerPatterns/index.js'
import { IronMan } from './ObjectInitializerPatterns/index.js'


/*
console.log(Spidey)
console.log(Spidey.skills)

console.log(IronMan)
console.log(IronMan.skills)
*/

// https://stackoverflow.com/questions/17546953/cant-access-object-property-even-though-it-shows-up-in-a-console-log

const convert = new Convert()

console.log(convert.toString(3))

// 인자 대신 체이닝으로 구현하기 