/**
 * Created by Lonmee on 4/19/2017.
 */

class Gear {
    constructor() {
        require(["../../verdor/laya/laya.core"], this.engReady);
    }

    engReady() {
        let canvas = Laya.init(800, 600);
        document.body.appendChild(canvas);
    }
}

new Gear();