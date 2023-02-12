<template>
  <div class="home" ref="homeRef">
    <HomeHeader/>
    <HomeCalendar @selectDate="changeDay"/>
    <HomeHotSuggest 
      :hotData="hotSuggestData"
      :startDay="startDay"
      :endDay="endDay"
      />
    <ScrollBar/>
    <HomeList 
      :houseListData="houseListData" 
      ref="loadRef"
      :flag="flag"
      @changeFlag="changeFlag"/>
  </div>
</template>

<script setup>
  import HomeHeader from './cpns/HomeHeader.vue';
  import HomeCalendar from './cpns/HomeCalendar.vue';
  import HomeHotSuggest from './cpns/HomeHotSuggest.vue';
  import ScrollBar from './cpns/ScrollBar.vue';
  import HomeList from './cpns/Homelist.vue';

  import { onMounted, ref } from 'vue';
  import useHomeStore from '@/store/modules/home';
  import { storeToRefs } from 'pinia';

  const flag = ref(true);

  const homeRef = ref();
  const loadRef = ref();
  /** 获取homeStore */
  const homeStore = useHomeStore();
  const { hotSuggestData, houseListData } = storeToRefs(useHomeStore());

  /** 定义开始、结束日期 */
  const startDay = ref('');
  const endDay = ref('');

  onMounted(() => {
    //获取热门城市数据
    homeStore.getHotSuggestData();
    //获取分类数据
    homeStore.getCategoriesData();
    //获取房屋列表
    homeStore.getHouseListData();

    homeRef.value.addEventListener('scroll', loadRef.value.listScroll);
  });
  /** 订阅，修改开始、结束如期 */
  const changeDay = (start, end) => {
    startDay.value = start;
    endDay.value = end;
  }

  const changeFlag = (value) => {
    flag.value = value;
  }

</script>

<style lang='less' scoped >
  .home {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
</style>