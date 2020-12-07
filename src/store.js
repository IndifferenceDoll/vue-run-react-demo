import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    setCount (state, payload) {
      const { count = 0 } = payload;
      state.count = count;
    },
  },
  getters: {
    getCount: state => {
      return state.count;
    },
  },
});

export default store;
