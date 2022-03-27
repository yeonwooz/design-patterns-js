// The concept is to copy an existing object rather than creating a new instance from scratch

const Convert = (function(){
  function StringProto(){}

  StringProto.prototype.toString = function(targetObj) {
    return JSON.stringify(targetObj)
  }

  return function () {
    return new StringProto()
  }
})()

export { Convert }