/**
 * Created by Lonmee on 4/19/2017.
 */
import {ViewMgr} from "./view/ViewMgr";
import WebGL = laya.webgl.WebGL;
class Gear {
    constructor() {
        let canvas = Laya.init(Laya.Browser.width, Laya.Browser.height, WebGL);
        document.body.appendChild(canvas);
        Laya.stage.addChild(new ViewMgr());
        // require(["js/view/SmartScale_T"], function () {
            // new laya.SmartScale_T();
        // })
    }
}

new Gear();