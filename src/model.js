
const localStorageKeyName = 'recordList'
const model = {
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');//保存操作记录，方便统计
    },
    save(data){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }
}

export {model}