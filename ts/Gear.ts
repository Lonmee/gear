/**
 * Created by Lonmee on 4/19/2017.
 */
import {ViewMgr} from "./view/ViewMgr";

class Gear {
    constructor() {
        let canvas = Laya.init(800, 600);
        document.body.appendChild(canvas);
        Laya.stage.addChild(new ViewMgr());
    }
}

new Gear();