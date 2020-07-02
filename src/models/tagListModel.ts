type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';
    save: () => void;
    update: (id: string,name: string) => 'success'|'not found'|'duplicated';
    remove: (id: string) => boolean;
}

import createId from '@/lib/createId.ts';
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
        const id = createId().toString();
        this.data.push({id, name:name});
        this.save();
        return 'success';
    },
    save(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    update(id: string,name: string){
        const idList = this.data.map(item => item.id);
        if(idList.indexOf(id)>0){
            const names = this.data.map(item =>item.name);
            if(names.indexOf(name)>=0){
                return 'duplicated';
            }else{
                const tag = this.data.filter(item => item.id === id)[0];
                tag.id = tag.name = name;
                this.save();
                return 'success';
            }
        }else{
            return 'not found';
        }
    },
    remove(id: string){
        let index = -1;
        for(let i =0;i < this.data.length;i++){
            if(this.data[i].id === id){
                index = i;
                break;
            }
        }
        this.data.splice(index,1);
        this.save();
        return true;
    }
}

export default tagListModel;