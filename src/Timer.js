import { View } from './View.js';
import { Emitter } from './Emitter.js';

const Timer = {

  time: 60 * 60,
  CurrentTime: 0,
  interval: null,

  timeToMinutes: time => Math.floor(time / 60),
  timeToSeconds: time => time % 60,
  formatTime: time => String(time).padStart(2, '0'),

  init(time) {
    Emitter.emit('countdown-start')
    Timer.time = time || Timer.time
    Timer.currentTime = Timer.time
    Timer.interval = setInterval(Timer.countdown, 1000)
  },

  countdown() {
    Timer.currentTime -= 1
    const mins = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
    const secs = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))
    View.render({ mins, secs })
    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval)
      Emitter.emit('countdown-end')
      return
    }
  }

}

export { Timer }