import CheckCode from './checkCode';
import RequestCode from './requestCode';

class App {
  constructor() {
    this.checkCode = new CheckCode('#check_node');
    this.requestCode = new RequestCode('#request_code');
  }
}

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    if (document.querySelectorAll('head script').length === 0) {
      window.dispatchEvent(new Event('DOMContentLoaded'));
    }
  }
};

document.addEventListener('DOMContentLoaded', function (event) {
  new App();
});
