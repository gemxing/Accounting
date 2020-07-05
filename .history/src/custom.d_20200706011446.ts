type RootState = {
    recordList:RecordItem[],
    tagList: Tag[],
    currentTag?: Tag
}
type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    amount: number; // 数据类型 object | string
    //添加created字段
    createdAt?: string;  // 类 / 构造函数，这句代码跟createdAt:Data | undefined
}

type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';
    save: () => void;
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
}

interface Window {

}