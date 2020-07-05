<template>
        <ul class="types">
         <li></li>
        </ul>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Tabs extends Vue{
        @Prop() dataSource
    }
</script>

<style scoped>

</style>