export default class Post {
    constructor(title, description, img){
        this.title = title;
        this.description = description;
        this.img = img
        this.date = new Date();
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            img: this.img,
            description: this.description,
        }, null, 2)
    }
}