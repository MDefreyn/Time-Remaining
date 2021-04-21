import { Notifier } from './Notifier.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';

const notify = Notifier.notify({
  title: "Acabou a espera!",
  body: "O tempo que você definiu terminou!"
})

const App = {

  async start() {
    try {
      await Notifier.init()
      Emitter.on('countdown-start', notify)
      Emitter.on('countdown-end', Timer.init)
      Timer.init()
    } catch (err) {
      alert('Você precisa permitir notificações para usar este APP')
      console.error(err.message)
    }
  }

}

export { App }