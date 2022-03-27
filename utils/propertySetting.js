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
const PropProto = (function(){
  function ProtoProps(targetObj, newProp, configs){
    this.targetObj = targetObj
    this.newProp = newProp
    this.configs = configs
  }

  ProtoProps.prototype.defineProp = function() {
    this.targetObj[this.newProp] = {
      writable: true,
      enumerable: true,
      configurable: true,
      ...this.configs
    }

    return this.targetObj
  }

  return function (targetObj, newProp, configs) {
    return new ProtoProps(targetObj, newProp, configs).defineProp()
  }
})()

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
    this.writable = _props.writable ?? this.writable
    this.enumerable = _props.enumerable ?? this.enumerable
    this.configurable = _props.configurable ?? this.configurable
  }
}


// class extension ?

export default {defineProp, PropProto, PropsClass}