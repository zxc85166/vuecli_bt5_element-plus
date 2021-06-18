import { createStore } from "vuex";

export default createStore({
  state: {
    name: "您的名字",
  },
  actions: {
    updateName(context, status) {
      context.commit("NAME", status);
    },
  },
  mutations: {
    NAME(state, status) {
      state.name = status;
    },
  },
  getters: {
    // nameLength: (state) => {
    //   return state.name.length;
    // },
  },
});
