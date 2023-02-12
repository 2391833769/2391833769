<template>
  <div class='home_list'>
    <ul>
      <li v-for="item in houseListData" :key="item.data.houseId">
        <template v-if="item.discoveryContentType === 9">
          <HomeItem1 :homeData="item.data"/>
        </template>
        <template v-else-if="item.discoveryContentType === 3">
          <HomeItem2 :homeData="item.data"/>
        </template>
        
      </li>
    </ul>
    <div class="load_more" ref="loadRef">
      <van-loading type="spinner" />
    </div>
  </div>
</template>

<script setup>
  import useHomeStore from '@/store/modules/home';
  import { ref, onMounted } from 'vue';
  import HomeItem1 from '@/components/home/HomeItem1.vue';
  import HomeItem2 from '@/components/home/HomeItem2.vue'
// import { emit } from 'process';

  const homeStore = useHomeStore();

  const loadRef = ref();
  //定义接收属性
  const props = defineProps({
    houseListData: Array,
    flag: Boolean
  });

  const emits = defineEmits(['changeFlag'])

  const listScroll = () => {

    const distanceToTop = loadRef.value.getBoundingClientRect().top;

    //判断滚动距离，加载更多
    if (distanceToTop <= document.body.clientHeight - 50 && props.flag === true) {

      emits('changeFlag', false);
      homeStore.getHouseListData();
      //节流
      //设置flag
      setTimeout(() => {
        emits('changeFlag', true);
      }, 1000)
  }
}

  defineExpose({
    listScroll
  });

</script>


<style lang='less' scoped >
  .home_list {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 10px 5px;

      li {
        flex: 0, 0, 50%;
        width: 50%;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 5px;
        padding: 5px;
      }
    }
  }

  .load_more {
    text-align: center;
  }
</style>
