<template>
        <Layout class-prefix="layout">
            <NumberPad/>
            <Types/>
            <Notes/>
            <Tags :data-source="tags"/>
        </Layout>
</template>

<script>
    import Vue from 'vue'
    import NumberPad from '@/components/NumberPad.vue'
    import Types from '@/components/Types.vue'
    import Notes from '@/components/Notes.vue'
    import Tags from '@/components/Tags.vue'
    export default Vue.extend({
        name: 'Money',
        components:{NumberPad,Types,Notes,Tags},
        data(){
            return{
                tags: ['衣','食','住','行']
            }
        }
    })
</script>

<style lang="scss">//方便给组件传你想要得类
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>
