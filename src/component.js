export default class Component {
  constructor() {
    this.name = 'dummy';
  }

  render() {
    let span = document.createElement('span');
    span.innerText = this.name;
    return span;
  }
}
