import { action, observable } from 'mobx';

// Example taken from https://github.com/zeit/next.js/tree/canary/examples/with-mobx
// If loading from the server, we want to instantiate a new store.
// If loading from the client, we want to use the same store.
// We want to keep these separate so that data doesn't get mixed up.
// This code accomplishes this... more of an explanation is in the readme of the example

let store = null

class Store {
  @observable lastUpdate = 0
  @observable light = false

  constructor(isServer, lastUpdate) {
    this.lastUpdate = lastUpdate
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    }, 1000)
  }

  stop = () => clearInterval(this.timer)
}

export function initStore(isServer, lastUpdate = Date.now()) {
  if (isServer) {
    return new Store(isServer, lastUpdate)
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate)
    }
    return store
  }
}
