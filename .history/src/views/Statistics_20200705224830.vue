<template>
        <Layout>
            <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
            <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
            <div>type:{{type}}
                <br/>
                interval:{{interval}}
            </div>
            <div>
                <ol>
                    <li v-for="item in result" :key="item.id">
                        {{item}}
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
</style>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import Tabs from '@/components/Tabs.vue';
    import intervalList from '@/constants/intervalList';
    import recordTypeList from '@/constants/RecordTypeList';

    @Component({
        components: {Tabs},
    })
    export default class Statistics extends Vue {
        get recordList(){
            return this.$store.state.recordList;
        }
        get result(){
            const {recordList} = this;
            const hashTable = {[key:string]: RecordItem[]} = {};
            for(let i = 0;i<recordList.length;i++ ){
                const [data,time] = recordList[i].createdAt.split('T');
                console.log(data);
                
            }
            return [];
        }
        mounted(){
            this.$store.commit('fetchRecords');
        }
        type = '-';
        intervalList = intervalList;
        interval = 'day';
        recordTypeList = recordTypeList;
    }
</script>

