import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';

Vue.use(Vuex)//把store绑到Vue.prototype.$store = store
const localStorageKeyName = 'recordList';

const store = new Vuex.Store({
  state: {//data
      recordList: [] as RecordItem[],
      tagList: [] as Tag[],
  },
  mutations:{//改动//相当于methods
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state,record){
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecords')
      // recordStore.saveRecords();
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      const tagList = JSON.parse(window.localStorage.getItem(tagList) || '[]');
      return this.tagList;
    },
    }
  });

export default store;
