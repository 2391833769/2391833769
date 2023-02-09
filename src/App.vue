<style lang='less' scoped >
  .app {
    // position: relative;
    margin-bottom: 50px;
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

<template>
  <div class="app">
    <RouterView/>
    <div class="bottom">
      <TabBar/>
    </div>
  </div>
  
</template>

<script setup>
  import { ref } from 'vue'
  import TabBar from '@/components/TabBar/TabBar.vue';

  const active = ref(0)
  // document.body.style.overflow = 'hidden';
  // document.body.style.overflowY = 'true'
</script>