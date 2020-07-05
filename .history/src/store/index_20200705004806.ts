import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {//data
    count: 0
  },
  mutations:{//改动//相当于methods
    increment(state){
      state.count+=1;
    }
  }
});

console.log(store.state.count);

store.commit

export default store;
