<template>
        <Layout>
            <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
            <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
            <div>
                <ol>
                    <li v-for="(group,index) in result" :key="index">
                        <h3 class="title">{{group.title}}</h3>
                        <ol>
                            <li v-for="item in group.items" :key="item.id" class="record">
                                <span>{{tagString(item.tags)}}</span>
                                <span class="notes">{{item.notes}}</span>
                                <span>￥{{item.amount}}</span>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </Layout>      
</template>

<style lang="scss" scoped >
    ::v-deep{
        .type-tabs-item{
            background: white;
            &.selected{
                background: #c4c4c4;
                &::after{
                    display: none;
                }           
            }
        }
        .interval-tabs-item{
            height: 48px;
        }
    }
    %item{
        padding:8px 16px;
        line-height:24px;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .title{
        @extend %item;
    }
    .record{
        background: white;
        @extend %item;
    }
    .notes{
        margin-right: auto;
        margin-left: 16px;
        color:#999;
    }
</style>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import intervalList from '@/constants/intervalList';
    import recordTypeList from '@/constants/RecordTypeList';
    import dayjs from 'dayjs';



    @Component({
        components: {Tabs},
    })
    export default class Statistics extends Vue {
        tagString(tags: Tag[]){
            return tags.length === 0 ? '无' : tags.join(',');
        }
        beautify(string: string){
            const d = new Data(Data.parse(string));
            console.log(d);
            const y = d.getFullYear();
            const m = d.
            
        }
        get recordList(){
            return (this.$store.state as RootState).recordList;
        }
        get result(){
            const {recordList} = this;
            type HashTableValue = { title: string; items: RecordList[] }
            const hashTable: {[key: string]: HashTableValue} = {};
            for(let i = 0; i< recordList.length; i++ ){
                const [data] = recordList[i].createdAt.split('T');
                hashTable[data] = hashTable[data] || {title: data,items: []};
                hashTable[data].items.push(recordList[i])
            }
            console.log(hashTable);
            return hashTable;
        }
        beforeCreate(){
            this.$store.commit('fetchRecords');
        }
        type = '-';
        intervalList = intervalList;
        interval = 'day';
        recordTypeList = recordTypeList;
    }
</script>

