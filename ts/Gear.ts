import {ViewMgr} from "./view/ViewMgr";
import Settings from "./data/Settings";
/**
 * Created by Lonmee on 4/19/2017.
 */

class Gear {
    constructor() {
        let canvas = Laya.init(Settings.frameworks.width, Settings.frameworks.height);
        document.body.appendChild(canvas);
        Laya.stage.addChild(new ViewMgr());
    }
}

new Gear();