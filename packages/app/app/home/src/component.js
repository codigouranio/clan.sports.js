class Component {
  constructor(id) {
    this.obj = document.querySelector(id);
    window.addEventListener('__init_state__', () => this.init());
    this.init();
  }

  init() {
    window.addEventListener('__popstate__', () => this.render());
  }

  destroy() {
    window.removeEventListener('__init_state__', () => this.render());
    window.removeEventListener('__popstate__', () => this.render());
  }

  hide() {
    if (!this.obj.classList.contains('hide')) {
      this.obj.classList.add('hide');
    }
  }

  show() {
    if (this.obj.classList.contains('hide')) {
      this.obj.classList.remove('hide');
    }
  }
}

export default Component;
