type TagListModel = {
    data: string[];
    fetch: () => string[];
    create: (name: string) => 'success' | 'duplicated';
    save: () => void;
}
const localStorageKeyName = 'tagList'
const tagListModel: TagListModel = {
    data: [],
    fetch(){
        this.data =JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');//保存操作记录，方便统计
        return this.data
    },
    create(name){
        if(this.data.indexOf(name) >= 0){return 'duplicated';}
        this.data.push(name);
        this.save();
        return 'success';
    },
    save(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export default tagListModel;