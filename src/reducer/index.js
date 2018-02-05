import {combineReducers} from "redux";
import activityList  from "./Activities/activitiesList";
import menuDetl from "./MenuList";

export default combineReducers({
    activityList,
    menuDetl
})