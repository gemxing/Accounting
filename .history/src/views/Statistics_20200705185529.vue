<template>
        <Layout>
            <Types class-prefix='zzz' :value.sync="yyy"/>
            <Tabs :data-source="array" />
        </Layout>      
</template>

<style lang="scss" scoped >
    ::v-deep .zzz-item{
        background: white;
        &.selected{
            background: #c4c4c4;
            &::after{
                display: none;
            }           
      }
    }
</style>

<script lang="ts">
    import Types from '@/components/Money/Types.vue';
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import Tabs from '@/components/Tabs.vue';
    @Component({
        components: {Types,Tabs},
    })
    export default class Statistics extends Vue {
        yyy = '';
        array = [{text:'按天',value}]
    }
</script>

