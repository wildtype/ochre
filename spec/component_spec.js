import Component from '../src/javascripts/component';

describe('Component', () => {
  describe('#constructor', () => {
    it('defines attribute `name` with value dummy', () => {
      let component = new Component();
      expect(component.name).toEqual('dummy');
    });
  });

  describe('#render', () => {
    it('returns span containing component name', () => {
      let component = new Component();
      let container = document.createElement('div');
      container.appendChild(component.render());

      expect(container.getElementsByTagName('span')).toHaveLength(1);
      expect(container).toHaveText('dummy');
    })
  });
});
