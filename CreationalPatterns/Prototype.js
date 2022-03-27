// The concept is to copy an existing object rather than creating a new instance from scratch

const Convert = (function(){
  function StringProto(obj){
    this.targetObj = obj
  }

  StringProto.prototype.toString = function() {
    return JSON.stringify(this.targetObj)
  }

  return function (obj) {
    return new StringProto(obj)
  }
})()

export { Convert }