<template>
  <div class="scroll_box">
    <div class='scroll_bar'>
    <div class="item" v-for="item in categoriesData">
      <img :src="item.pictureUrl" alt="">
      <span>
        {{ item.title }}
      </span>
    </div>
  </div>
  </div>
</template>


<script setup>
  import useHomeStore from '@/store/modules/home';
  import { storeToRefs } from 'pinia';


  const { categoriesData } = storeToRefs(useHomeStore());
</script>


<style lang='less' scoped >
  .scroll_box {
    height: 85px;
    overflow: hidden;
  }
  .scroll_bar {
    display: flex;
    overflow-x: auto;
    margin-top: 15px;
    padding-bottom: 10px;
    .item {
      flex-shrink: 0;
      flex-basis: 20%;
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 40px;
        height: auto;
      }

      span {
        margin-top: 10px;
      }
    }
    
  }
</style>
