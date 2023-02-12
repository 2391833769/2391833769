
<template>
  <div class="app">
    <RouterView/>
    <div class="bottom"  v-if="!route.meta.hiddenBar">
      <TabBar/>
    </div>
  </div>
  
</template>

<script setup>
  import { ref } from 'vue'
  import TabBar from '@/components/TabBar/TabBar.vue';
  import { useRoute } from 'vue-router';

  const active = ref(0);

  const route = useRoute();
  // document.body.style.overflow = 'hidden';
  // document.body.style.overflowY = 'true'
</script>

<style lang='less' scoped >
  .app {
    overflow: hidden;
    // background-color: red;

    // .app_content {
    //   height: 1000px;
    // }
    
    .bottom {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 50px;
        border-top: 1px solid black;
      }
  }
</style>
