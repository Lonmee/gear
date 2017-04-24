/**
 * Created by Lonmee on 4/19/2017.
 */
import {ViewMgr} from "./view/ViewMgr";
import WebGL = laya.webgl.WebGL;
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
class Gear {
    constructor() {
        let canvas = Laya.init(Laya.Browser.width, Laya.Browser.height, WebGL);
        document.body.appendChild(canvas);
        Laya.stage.addChild(new ViewMgr());
        // require(["js/view/SmartScale_T"], function () {
        // new laya.SmartScale_T();
        // })
        Laya.loader.load("http://www.lonmee.com/favicon.ico",
            Handler.create(this, this.completeHandler, null, true),
            Handler.create(this, this.progressHandler, null, true),
            Loader.IMAGE,
            0,
            true,
            "bin",
            false
        );
        //load(url: any,
        // complete?: laya.utils.Handler,
        // progress?: laya.utils.Handler,
        // type?: string,
        // priority?: number,
        // cache?: boolean,
        // group?: string,
        // ignoreCache?: boolean): LoaderManager;
    }

    progressHandler(e) {
        e;
    }

    completeHandler(e) {
        e;
    }
}

new Gear();