type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
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
        //this.data = [{id:'1',name:'1'},{id:'2',name:'2'}]
        const names = this.data.map(item => item.name);
        if(names.indexOf(name) >= 0){return 'duplicated';}
        this.data.push({id:name, name:name});
        this.save();
        return 'success';
    },
    save(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export default tagListModel;