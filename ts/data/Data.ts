/**
 * Created by ShanFeng on 4/19/2017.
 */

export class Story {
    constructor(private _id: number) {
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