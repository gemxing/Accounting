import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//把store绑到Vue.prototype.$store = store

const store = new Vuex.Store({
  state: {//data
      record
  },
  mutations:{//改动//相当于methods
    createRecord(state,record){
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      this.recordList && state.recordList.push(record2);
      recordStore.saveRecords();
    }
    }
  }
});

console.log(store.state.count);
store.commit('increment');
console.log(store.state.count);


export default store;
