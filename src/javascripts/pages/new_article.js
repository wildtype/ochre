import Quill from 'quill';

export default class NewArticle {
  constructor(html) {
    this.html = html;
    this.editor = this.html.querySelector('#article-content');
  }

  run() {
    const toolbarOptions = [
      [
        {
          'header': [1, 2, 3, 4, 5, 6, false]
        }
      ],
      ['bold', 'italic', 'underline', 'strike', 'link'],
      [
        { 'list': 'ordered' },
        { 'list': 'bullet' }
      ],
      ['blockquote', 'code'],
      ['clean']
    ];

    const quillConfig = {
      placeholder: 'Write content here...', 
      modules: {
        toolbar: toolbarOptions,
      },
      theme: 'snow'
    };

    this.quill = new Quill(this.editor, quillConfig); 
  }
}
