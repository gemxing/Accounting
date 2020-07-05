import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//把store绑到Vue.prototype.$store = store

const store = new Vuex.Store({
  state: {//data
  },
  mutations:{//改动//相当于methods
    
    }
  }
});

console.log(store.state.count);
store.commit('increment');
console.log(store.state.count);


export default store;
