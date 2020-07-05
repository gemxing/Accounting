<template>
        <ul class="types">
         <li :class="{[classPrefix+'-item']: classPrefix, selected: value==='-'}" @click="selectType('-')">支出</li>
         <li :class="{[classPrefix+'-item']: classPrefix, selected: value==='+'}" @click="selectType('+')">收入</li>
        </ul>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style scoped>

</style>