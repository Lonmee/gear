import {Person} from "./npc/Person";
/**
 * Created by ShanFeng on 4/19/2017.
 */

export class Story {
    person: Person;
    chapters: Array<Chapter>;
    constructor(private _id: number) {
        this.chapters = [];
        this.chapters.push(new Chapter(2));
        this.person = new Person(88);
    }

    get id(): number {
        return this._id;
    }
}

export class Chapter {
    constructor(private _id: number) {
    }

    get id(): number {
        return this._id;
    }
}

export class Scene {

    constructor(private _id: number) {
    }

    get id(): number {
        return this._id;
    }

}