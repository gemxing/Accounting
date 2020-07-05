<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateFormItem" />
    </div>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from "vue-property-decorator";

// type RecordItem = {
//   tags: string[];
//   notes: string;
//   type: string;
//   amount: number; // 数据类型 object | string
//   //添加created字段
//   createdAt?: Date; // 类 / 构造函数，这句代码跟createdAt:Data | undefined
// };
@Component({
  components: { Tags, FormItem, Types, NumberPad },
})
export default class Money extends Vue {
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
  onUpdateFormItem(value: string) {
    this.record.notes = value;
  }
  //保存该页面的数据操作，把record的复制保存到list
  saveRecord() {
    this.$store.commit('createRecord',this.record);
  }
}
</script>

<style lang="scss">
//方便给组件传你想要得类
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0px;
}
</style>
