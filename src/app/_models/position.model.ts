export class Position {
    home: number;
    about: number;
    faq: number;
    schedule: number;
    sponsor: number;
    workshop: number;

    constructor(obj) {
        this.home = 0;
        this.about = 0;
        this.faq = 0;
        this.schedule = 0;
        this.sponsor = 0;
        this.workshop = 0;

        if (obj) {
            Object.assign(this, obj);
        }
    }
}
