type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; // 数据类型 object | string
    //添加created字段
    createdAt?: Date;  // 类 / 构造函数，这句代码跟createdAt:Data | undefined
  }
const localStorageKeyName = 'recordList'
const recordListModel = {
    clone(data: RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];//保存操作记录，方便统计
    },
    save(data: RecordItem[]){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }
}

export default recordListModel;