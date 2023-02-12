<template>
  <div class="city_hot">
    <div class="hot_title">热门</div>
    <ul class="hot_list">
      <li 
        v-for="city in cityGroupData.hotCities"
        @click="setCity(city)"
        >
        <span>
          {{ city.cityName }}
        </span>
      </li>
    </ul>
  </div>
  <div class="city_group">
    <van-index-bar :index-list="indexList">
      <div v-for="cities in cityGroupData?.cities" >
        <van-index-anchor :index="cities.group" />
        <div v-for="city in cities.cities" @click="setCity(city)">
          <van-cell :title="city.cityName" />
        </div>
      </div>
    </van-index-bar>
  </div>
</template>


<script setup>
  import { defineProps, ref, watch, watchEffect } from 'vue';
  import useCityStore from '@/store/modules/city';
  import { useRouter } from 'vue-router';

  const cityStore = useCityStore();
  const router = useRouter();

  const indexList = ref([])

  //接收默认值
  const props = defineProps({
    cityGroupData: {
      type: Object,
      default: {}
    }
  });

  //监听数据变化
  watch(() => props.cityGroupData, () => {
    console.log('检测')
    indexList.value = props.cityGroupData.cities?.map(item => {
      console.log(item.group)
      return item.group;
    });
  });

  //设置当前城市并返回home页面
  const setCity = (city) => {
    cityStore.setCurrentCity(city);
    router.push('/home');
  }
  
</script>


<style lang='less' scoped >

  .hot_title {
    margin-bottom: 10px;
  }
  .city_hot {
    padding: 0 10px;
    font-size: 14px;

    ul {
      display: flex;
      // justify-content: space-around;
      flex-wrap: wrap;

      li {
        flex:0 0 25%;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        margin: 10px 0px;

        span {
          padding: 10px 10px;
          width: 70px;
          background-color: #fbf1e9;
          border-radius: 20px;
          text-align: center;
        }
      }
    }
  }
  .city_group {
    // --van-index-anchor-background: '#f7f8fa'
    --van-index-anchor-background: #f7f8fa !important;
  }

</style>
