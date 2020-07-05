import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex)//把store绑到Vue.prototype.$store = store
type RootState = {
  recordList:RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

const store = new Vuex.Store({
  state: {//data
      recordList: [] ,
      tagList: [] ,
      currentTag: undefined,
  } as RootState,
  mutations:{//改动//相当于methods
    setCurrentTag(state, id:string){
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
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
      return state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state,name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复了');
        return 'duplicated';
      }
      const id = createId().toString();
      state.tagList.push({id, name: name});
      store.commit('saveTags');
      window.alert('添加成功');
      return 'success';
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    findTag(state, id: string) {
      return state.tagList.filter(t => t.id === id)[0];
    },
    }
  });

export default store;