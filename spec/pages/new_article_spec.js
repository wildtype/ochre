import NewArticle from '../../src/javascripts/pages/new_article';
import Quill from 'quill';

describe('NewArticle', () => {
  let container, newArticle, editorDom;

  beforeEach(() => {
    container = document.createElement('div');
    editorDom = document.createElement('div');

    editorDom.id = 'article-content';
    container.appendChild(editorDom);

    newArticle = new NewArticle(container);
  });

  describe('#constructor', () => {
    it('takes param dom container, then set it as attribute', () => {
      expect(newArticle.html).toEqual(container);
      expect(newArticle.editor).toEqual(editorDom);
    });
  });

  describe('#run', () => {
    it('initialize Quill, set it in attributes quill', () => {
      newArticle.run();
      expect(newArticle.quill).toEqual(jasmine.any(Quill));
    });
  });
});
