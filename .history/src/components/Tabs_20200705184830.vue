<template>
        <ul class="types">
         <li></li>
        </ul>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decoration'

    @Component
    export default class Tabs extends Vue{
        @Prop({require:true}) dataSource!:{text:string,value:string}[]
    }
</script>

<style scoped>

</style>