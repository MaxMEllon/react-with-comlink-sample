import { expose } from 'comlinkjs'

const delay = (n) => new Promise(resolve => setTimeout(resolve, n))

class HelloWorker {
  async greet() {
    await delay(5000)
    return 'hello, world'
  }
}

expose(HelloWorker, self)
