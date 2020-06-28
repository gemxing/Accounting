<template>
    <nav>
      <router-link to="/money" class="item">
      <Icon name="money"/>
      记账
      </router-link>
      |
      <router-link to="/labels" class="item">
      <Icon name="label"/>
      标签
      </router-link>
      |
      <router-link to="/statistics" class="item">
      <Icon name="statistics"/>
      统计
      </router-link>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue'
    // import router from '../router/index';
    // import content from '../shims-vue';

    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try{
        importAll(require.context('../assets/icons',true,/\.svg$/));
    }catch(error){
        console.log(error);
    }
    
    export default Vue.extend({
        name: 'Nav'
    })
</script>

<style scoped>
    nav{
        display: flex;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        flex-direction: row;
        font-size: 12px;
    }
    nav > .item{
            padding: 2px 0;
            width:33.333333%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    nav .icon{
        width:32px;
        height: 32px;
    }
</style>