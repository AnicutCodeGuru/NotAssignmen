export const SET_ACTIVITIES = "SET_ACTIVITIES";
export const SET_ACTIVE_MENU = "SET_ACTIVE_MENU";


/**
 * Action to set the Activity  List
 * @param {*} companyList 
 */
export function setActivies(activityList){
   return {
        type:SET_ACTIVITIES,
        activityList
    }
}



/**
 * Function to set the current active menu.
 * @param {*} activeMenuDetl 
 */
export function setActiveMenu(activeMenuDetl){
    return {
        type:SET_ACTIVE_MENU,
        payLoad:activeMenuDetl.payLoad
    }
}



/**
 * Function to fetch the activity list from backend.
 */
export function fetchActivityList(){
      return dispatch=>{
        fetch("../data/config.json")
        .then(function(res){
          //  res.json();
        } )
        .then(data=> dispatch(setActivies( [
              {
                "name": "host1",
                "hostname": "nessus-ntp.lab.com",
                "port": 1241,
                "username": "toto"
              },
              {
                "name": "host2",
                "hostname": "nessus-xml.lab.com",
                "port": 3384,
                "username": "admin"
              }
            ]
          )))
    }
}


