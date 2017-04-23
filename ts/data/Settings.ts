/**
 * Created by Lonmee on 4/23/2017.
 */
interface Frameworks {
    width: number
    height: number
    bgColor?: string
    showStatus: boolean

}

export default class Settings {
    static frameworks: Frameworks = {width: 800, height: 600, bgColor: "#CCCCCC", showStatus: true};
}