import PropertySetting from "../../utils/propertySetting.js"

const IronMan = {
  name: 'IronMan'
}

Object.defineProperty(IronMan, 'skills', {
  value: ['Smart-Rocket', 'Energy-Pulse'],
  writable: true
})

PropertySetting.defineProp(IronMan, 'gender', {value: 'male'})

PropertySetting.PropProto(IronMan, 'realName', {value: 'Tony Stark'})

IronMan.Suits = new PropertySetting.PropsClass({
  value:['Mark I, Mark II, Mark III']
})

export { IronMan }

