/**
 * Created by Lonmee on 4/19/2017.
 */
import {Story} from "./data/Data";

class Gear {
    private story: Story;

    constructor() {
        //require(["xx"], this.load);

        this.story = new Story(0);
        let c = this.story.chapters[0];
        let p = this.story.person;

    }

    init() {

    }

    load() {

    }
}

new Gear().init();