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
  function ProtoProps(targetObj, newProp){
    this.targetObj = targetObj
    this.setConfig = function(newProp, configs) {
      this.targetObj[newProp] = configs
    }
  }

  ProtoProps.prototype.configs = function(extra) {
    return {
      writable: true,
      enumerable: true,
      configurable: true,
      ...extra
    }
  }

  return function (targetObj, newProp, configs) {
    let instance = new ProtoProps(targetObj, newProp)
    const newConfig = instance.configs(configs)
    instance.setConfig(newProp, newConfig)
    return instance
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