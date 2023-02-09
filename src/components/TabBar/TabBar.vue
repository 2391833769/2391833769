<style lang='less'>
  .tab_bar {
    height: 100%;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;

      li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        .router_link {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &.active {
            color: #ff9645;
          }

          img {
            width: 25px;
            height: 25px
          }
        }
      }
    }
  }
</style>

<template>
  <div class='tab_bar'>
    <ul class="app">
      <li v-for="(item, index ) in tabData">
        <RouterLink 
          :to="item.to" 
          class="router_link"
          :class="{ active: currIndex === index }"
          @click="tabClick(index)"
        >
          <img :src="currIndex === index ? loadImg(item.active_src) : loadImg(item.img_src)">
          {{ item.text }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>


<script setup>
  import { ref } from 'vue';

  import tabData from '@/assets/data/tab_bar_data';
  import loadImg from '@/utils/load_img'

  const currIndex = ref(0)
  
  const tabClick = (index) => {
    console.log(currIndex)
    currIndex.value = index;
  }

</script>