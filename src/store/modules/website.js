export default {
  state: {
    loading: false,
    drawer: true,
  },
  getters: {},
  mutations: {
    SET_DRAWER(state, payload) {
      state.drawer = payload;
    },
  },
  actions: {},
};
