import NewArticle from './pages/new_article';

export default class Application {
  constructor(body) {
    this.body = body;
    this.bodyClass = this.body.className;

    this.runners = {
      'page:new_article': NewArticle,
    };
  }

  run() {
    this.pageApplication = new NewArticle(this.body);
    this.pageApplication.run();
  }
}
