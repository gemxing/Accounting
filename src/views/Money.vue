<template>
        <Layout class-prefix="layout">
            <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
            <Types :value.sync="record.type"/>
            <Notes @update:value="onUpdateNotes"/>
            <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import NumberPad from '@/components/NumberPad.vue'
    import Types from '@/components/Types.vue'
    import Notes from '@/components/Notes.vue'
    import Tags from '@/components/Tags.vue'
    import {Component, Watch} from 'vue-property-decorator';
    // import model from '@/model.js';//js写法
    const model = require('@/model.js').model;
    console.log(model);
    

    const recordList: Record[] = model.fetch();

    type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; // 数据类型 object | string
    //添加created字段
    createdAt?: Date;  // 类 / 构造函数，这句代码跟createdAt:Data | undefined
  }
    @Component({
    components: {Tags, Notes, Types, NumberPad}
  })
    export default class Money extends Vue {
    tags = ['衣', '食', '住', '行', '彩票'];
    recordList: Record[] = recordList;
    record: Record = {
      tags: [], notes: '', type: '-', amount: 0
    };
    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }
    onUpdateNotes(value: string) {
      this.record.notes = value;
    }
    //保存该页面的数据操作，把record的复制保存到list
    saveRecord() {
      const record2: Record = JSON.parse(JSON.stringify(this.record));
      record2.createdAt = new Date();
      this.recordList.push(record2);
    }
    @Watch('recordList')
    onRecordListChange() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    }
  }
</script>

<style lang="scss">//方便给组件传你想要得类
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>
