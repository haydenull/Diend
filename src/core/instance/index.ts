import { InitMixin } from './init'

class Diend implements InitMixin {
  constructor(options: Diend.options) {
    console.log(`=== [Faiz Console:] Diend constructor ===`)
    this._init()
  }

  _init: () => void
}

applyMixins(Diend, [ InitMixin ])



function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name]
    })
  })
}

export default Diend
