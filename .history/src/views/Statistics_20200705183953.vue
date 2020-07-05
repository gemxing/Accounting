<template>
    <div class="x">
        <Layout>
            <Types class-prefix='' :value.sync="yyy"/>
        </Layout>
    </div>
        
</template>

<style lang="scss" scoped >
    .x ::v-deep li{
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

