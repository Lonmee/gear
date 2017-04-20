/**
 * Created by Lonmee on 4/19/2017.
 */
import {Person} from "./data/Person";
import {Person as NPCPerson} from "./data/npc/Person";
import {Story} from "./data/Data";

class Gear{
    private person: Person;
    private story: Story;

    constructor() {
        this.person = new Person("Lunar");
        console.log(this.person.name);
        this.person.walk();

        this.story = new Story(0);
        console.log(this.story.id);

        let p:NPCPerson = new NPCPerson(55);
        console.log(p.age);
    }
}

new Gear();