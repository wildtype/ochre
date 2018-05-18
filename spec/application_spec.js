import Application from '../src/javascripts/application';
import NewArticle from '../src/javascripts/pages/new_article';

describe('Application', () => {
  let body, application;

  beforeEach(() => {
    body = document.createElement('div');
    body.classList.add('page:index');

    application = new Application(body);
  });

  describe('#constructor', () => {
    it('receive body DOM as params, set attribute bodyClass from body className', () => {
      expect(application.body).toEqual(body);
      expect(application.bodyClass).toEqual('page:index');
    });

    it('set mappings for each page application runner class', () => {
      expect(application.runners['page:new_article']).toEqual(NewArticle);
    });
  });

  describe('#run', () => {
    beforeEach(() => { 
      spyOn(NewArticle.prototype, 'run');
    });

    it('instantiate page application runner object', () => {
      application.run();
      expect(application.pageApplication).toEqual(jasmine.any(NewArticle));
      expect(application.pageApplication.html).toEqual(body);
    });

    it('calls pageApplication method method `run`', () => {
      application.run();
      expect(NewArticle.prototype.run).toHaveBeenCalled();
    });
  });
});
