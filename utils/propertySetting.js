/*
Multiple ways to defined or assign values to properties
*/

// Function
const defineProp = (targetObj, newProp, configs) => {
  const newConfigs = {
    writable: true,
    enumerable: true,
    configurable: true,
    ...configs
  }
  
  Object.defineProperty(targetObj, newProp, newConfigs)
}


// Prototype
//??????????




// Class
class PropsClass {
  constructor(_props) {
    this.value = _props.value
    this.writable = _props.writable ?? true
    this.enumerable = _props.enumerable ?? true
    this.configurable = _props.configurable ?? true
  }

  get _props() {
    return {
      value: this.value,
      writable: this.writable,
      enumerable: this.enumerable,
      configurable: this.configurable,
    }
  }

  set _props(_props) {
    this.value = _props.value
    this.writable = _props.writable
    this.enumerable = _props.enumerable
    this.configurable = _props.configurable
  }
}


// class extension ?

export default {defineProp, PropsClass}