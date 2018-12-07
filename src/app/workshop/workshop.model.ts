export class Workshop {
  iconPath: string;
  title: string;
  date: string;
  location: string;
  speaker: {
    name: string;
    title: string;
  };
  description: string;

  // constructor(path: string,
  //   title: string,
  //   date: Date,
  //   loc: string,
  //   speaker: {name: string, title: string},
  //   description: string) {
  //     this.iconPath = path;
  //     this.title = title;
  //     this.date = date;
  //     this.location = loc;
  //     this.speaker = speaker;
  //     this.description = description;
  //   }
    constructor(obj) {
      this.iconPath = '';
      this.title = '';
      this.date = '';
      this.location = '';
      this.speaker = {name: '', title: ''};
      this.description = '';

      if (obj) {
        Object.assign(this, obj);
      }
    }
}
