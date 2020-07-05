<template>
        <Layout>
            <Types class="x"/>
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
        components: {}
    })

    export default class Statistics extends Vue {
        
    };
</script>

