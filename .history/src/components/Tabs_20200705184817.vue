<template>
        <ul class="types">
         <li></li>
        </ul>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from 'vue-pro'

    @Component
    export default class Tabs extends Vue{
        @Prop({require:true}) dataSource!:{text:string,value:string}[]
    }
</script>

<style scoped>

</style>