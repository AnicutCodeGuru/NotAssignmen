export default function (state=null,action={}){
    if(state===null){
        state= {
            activeMenu:{
                label:"Configarations",
                value:'configarations'
            },
            MenuList:[
                {
                    label:"Configarations",
                    value:'configarations'
                }
            ]
        };
    }
    switch(action.type){
        case "SET_ACTIVE_MENU" :
           return {
            activeMenu:{...action.payLoad},
            MenuList:[...state.MenuList]
        }
        break;
        default:
            return state
    }
    return 
}