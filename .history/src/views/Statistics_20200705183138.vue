<template>
        <Layout>
            <Types class="x" :value.asy="yyy"/>
        </Layout>
</template>

<style lang="scss" scoped >
    .x ::v-deep li{
        &.selected{
            background: #000;           
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

