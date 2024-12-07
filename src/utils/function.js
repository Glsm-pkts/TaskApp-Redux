import ThemeColors from "../theme/color";
import { statusType } from "./constants";

 const setColor= (status) => {
    switch(status){
        case statusType.INPROGRESS:
            return ThemeColors.orange;

        case statusType.INREVIEW :
            return ThemeColors.Lightgreen;

        case statusType.ONHOLD:
            return ThemeColors.yellow;

        case statusType.COMPLETED:
            return ThemeColors.gray;

        default:
            return ThemeColors.gray;
    }
}
export { setColor}