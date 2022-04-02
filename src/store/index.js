import themeStore from "@/store/themeStore";
import todoStore from "@/store/todoStore";
import { createStore } from "vuex";

export default createStore({
    modules: {
        theme: themeStore,
        todo: todoStore
    }
});
