import { getData } from './data';

class CounterBack {
  time = 0;

  constructor() {
    this.counter = 0;
  }

  start() {
    this.time = 10;
    this.x = setInterval(() => {
      console.log(--this.time);
      if (this.time === 0) {
        console.log('Time out');
        clearInterval(this.x);
        console.log(getData());
      }
    }, 1000);
  }

  stop() {
    this.counter = 0;
    clearInterval(this.x);
  }
}

export default CounterBack;
