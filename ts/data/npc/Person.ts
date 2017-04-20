/**
 * Created by ShanFeng on 4/19/2017.
 */
export class Person {

    constructor(private _age: number) {
    }

    get age(): number {
        return this._age;
    }
}