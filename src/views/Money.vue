<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注" placeholder="在这里输入备注" 
                :value.sync="record.notes"/>
    </div>
    <Tags @update:value="record.tags = $event"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from "vue-property-decorator";
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/RecordTypeList';

// type RecordItem = {
//   tags: string[];
//   notes: string;
//   type: string;
//   amount: number; // 数据类型 object | string
//   //添加created字段
//   createdAt?: Date; // 类 / 构造函数，这句代码跟createdAt:Data | undefined
// };
@Component({
  components: { Tags, FormItem, NumberPad, Tabs },
})
export default class Money extends Vue {
  recordTypeList = recordTypeList;
  get recordList(){
    return this.$store.state.recordList;
  }
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0
  };
  created(){
    this.$store.commit('fetchRecords')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  //保存该页面的数据操作，把record的复制保存到list
  saveRecord() {
    if(!this.record.tags || this.record.tags.length === 0){
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord',this.record);
    if(this.$store.state.createRecordError === null){
      window.alert('账单已保存');
    }
  }
}
</script>

<style lang="scss" scoped>
//方便给组件传你想要得类
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0px;
}
</style>
