/**
 * Created by Lonmee on 4/19/2017.
 */
import {Person} from "./data/Person";
import {Person as NPCPerson} from "./data/npc/Person";
import {Story, Chapter, Scene} from "./data/Data";

class Gear {
    private person: Person;
    private story: Story;
    private chapter: Chapter;
    private scene: Scene;
    private str: number;

    constructor() {
        this.str = 9;
        this.person = new Person("Lunar");
        console.log(this.person.name);
        this.person.walk();

        this.story = new Story(0);
        console.log(`story ID: ${this.story.id}`);

        this.chapter = new Chapter(1);
        console.log(`chapter ID: ${this.story.id}`);

        this.scene = new Scene(3);
        console.log(`scene ID: ${this.scene.id}`);

        let p: NPCPerson = new NPCPerson(55);
        console.log(p.age);
    }

    init() {

    }

}

new Gear().init();