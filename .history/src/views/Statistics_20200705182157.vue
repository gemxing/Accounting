<template>
        <Layout>
            <Types :value.sync="record.type" />
        </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Statistics'
    })
</script>
