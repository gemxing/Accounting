<template>
    <label class="formItem">
        <span class="name">{{this.fieldName}}</span>  
        <!-- <input type="text" :value="value" @input="onInput" placeholder="在这里输入备注内容"> -->
        <input type="text" :value="value" @input="onValueChanged($event.target.value)" :placeholder="this.placeholder">
    </label>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component,Watch,Prop} from 'vue-property-decorator';

    @Component
    export default class FormItem extends Vue {
    @Prop({default: ''}) value!: string;
    @Prop() fieldName!: string;
    @Prop() placeholder!: string;
    @Watch('value')
    onValueChanged(value: string) {
      this.$emit('update:value', value);
    }
  }
</script>

<style lang="scss" scoped>
    .formItem{
        font-size:14px;
        padding-left: 16px;
        display: flex;
        align-items: center;    
    }
    .name{
        padding-right: 16px;
        }
    input{
        height: 40px;
        flex-grow: 1;
        background: transparent;
        border: none;
        padding-right: 16px;
    }
</style>