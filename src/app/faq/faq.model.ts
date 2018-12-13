export class Faq {
  question: string;
  answer: string;

  constructor(obj) {
    this.question = '';
    this.answer = '';

    if (obj) {
      Object.assign(this, obj);
    }
  }
}
