import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations:{//改动//相当于methods
    increment(state){
      
    }
  }
});

console.log(store.state.count);


export default store;
