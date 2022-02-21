import { createStore } from "vuex";
import coaches from "./modules/coaches/coaches.js";
import requests from "./modules/requests/requests.js";

const store = createStore({
    modules: {
        coachModule: coaches,
        requestModule: requests,
    },
    state(){
        return{
            userId: 'c3',
        };
    },
    getters: {
        userId(state){
            return state.userId;
        },
    },
});

export default store;