/**
 * Created by ShanFeng on 4/19/2017.
 */

export class Person {
    constructor(private _name: string) {
    }

    get name(): string {
        return this._name;
    }

    walk() {
        console.log("I'm walking !");
    }
}