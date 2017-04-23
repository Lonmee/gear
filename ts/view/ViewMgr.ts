import Sprite = laya.display.Sprite;
/**
 * Created by Lonmee on 4/23/2017.
 */

export class ViewMgr extends Sprite{

    constructor() {
        super();
        this.graphics.drawCircle(200, 200, 150, "#FFFFFF", "#FFFF00", 5);
    }
}