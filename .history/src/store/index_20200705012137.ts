import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';

Vue.use(Vuex)//把store绑到Vue.prototype.$store = store
const localStorageKeyName = 'recordList';

const store = new Vuex.Store({
  state: {//data
      recordList: [] as RecordItem[]
  },
  mutations:{//改动//相当于methods
    createRecord(state,record){
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2);
      // recordStore.saveRecords();
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    },
    }
  }
});

console.log(store.state.count);
store.commit('increment');
console.log(store.state.count);


export default store;
