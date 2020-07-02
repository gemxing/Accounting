type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; // 数据类型 object | string
    //添加created字段
    createdAt?: Date;  // 类 / 构造函数，这句代码跟createdAt:Data | undefined
  }

import clone from '@/lib/clone'

const localStorageKeyName = 'recordList'
const recordListModel = {
    data:[] as RecordItem[],
    
    create(record: RecordItem){
        const record2: RecordItem = clone(record);
        record2.createdAt = new Date();
        this.data.push(record2);
    },
    fetch(){
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];//保存操作记录，方便统计
        return this.data;
    },
    save(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export default recordListModel;