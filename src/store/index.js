import { createStore } from "vuex";
import coaches from "./modules/coaches/coaches.js";

const store = createStore({
    modules: {
        coachModule: coaches,
    },
});

export default store;