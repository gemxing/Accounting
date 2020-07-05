<template>
        <Layout>
            <Types class-prefix='zzz' :value.sync="yyy"/>
            <Types class-prefix='zzz3' :value.sync="yyy"/>
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
    @Component({
        components: {Types},
    })
    export default class Statistics extends Vue {
        yyy = '';
    }
</script>

