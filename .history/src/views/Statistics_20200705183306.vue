<template>
        <Layout>
            <Types class="x" :value.sync="yyy"/>
        </Layout>
</template>

<style lang="scss" scoped >
    .x ::v-deep li{
        background: white;
        &.selected{
            background: #c4c4c4;
            &           
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

