<template>
  <div class='hot_suggest'>
    <ul>
      <li v-for="item in hotData">
        {{ item.tagText.text }}
      </li>
    </ul>
  </div>
  <div class="search_bar">
    <div class="search" @click="searchBarClick">开始搜索</div>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

  const router = useRouter();

  //定义传入属性
  const props = defineProps({
    hotData: Array,
    startDay: String,
    endDay: String
  });

  //定义搜索按钮事件
  const searchBarClick = () => {
    console.log(props.startDay)
    router.push({
      path: '/search',
      query: {
        startDay: props.startDay,
        endDay: props.endDay
      }
    })
  }    
  
</script>


<style lang='less' scoped >
  .hot_suggest {
    margin-left: 15px;
    margin-top: 20px;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        flex-grow: 0;
        flex-shrink: 0;
        background-color: rgba(206, 206, 205, 0.2);
        border-radius: 10px;
        padding: 5px;
        margin: 5px;
      }
    }
  }
  .search_bar {
    margin: 15px;
    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      font-size: 20px;
      color: whitesmoke;
      border-radius: 20px;
      background-image: linear-gradient(90deg, #ff8f1a, #ffae37);
    }
  }
</style>
