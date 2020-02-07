export default class AuthorSearch {
  constructor(poem) {
    this.state = {
      title: poem.tite,
      author: poem.author,
      lines: poem.lines,
      linecount: poem.linecount
    };
  }
}
