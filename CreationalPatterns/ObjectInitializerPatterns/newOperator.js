class Hero {
  constructor(_name) {
    this.name = _name
  }

  get _name() {
    return this.name
  }

  set _name(_name) {
    this.name = _name
  }
}

const Spidey = new Hero('spiderman')

Object.defineProperty(Spidey, 'skills', {
  value: ['Web-Swing', 'Web-Smash'],
  writable: true
})

export { Spidey }