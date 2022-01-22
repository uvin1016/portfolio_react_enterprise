import { combineReducers } from "redux";

const youtubeReducer = ((state={youtube: []}, action)=>{
    switch (action.type) {
        case "SET_YOUTUBE" :
            return {...state, youtube: action.payload}
    
        default :
            return state;
    }
});

const reducers = combineReducers({
    youtubeReducer
});

export default reducers;