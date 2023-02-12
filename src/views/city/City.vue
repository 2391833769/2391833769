<template>
  <div class='city'>
    <template v-if="cityData['cityGroup']">
      <div class="city_top">
      <van-search 
        v-model="inputValue" 
        placeholder="请输入搜索关键词"
        shape="round"
        :show-action=true 
        @cancel="cancelClick"
        @clear="clearClick"
      > 
      </van-search>    
      <van-tabs v-model:active="active" color="#ff7854" >
        <template v-for="(value, key) in cityData">
          <van-tab 
            :title="value.title"
            :name="key"
          >
          </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="city_content">
      <div v-show="active === 'cityGroup'">
        <CityGroup :cityGroupData="cityData['cityGroup']"/>
      </div>
      <div v-show="active === 'cityGroupOverSea'">
        <CityGroup :cityGroupData="cityData['cityGroupOverSea']"/>
      </div>
      
    </div>
    </template>
    <template v-else>
      <div class="load">
        <van-loading type="spinner" />
      </div>
    </template>
  </div>
</template>


<script setup>
  import { ref, onMounted, computed, toRef } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';

  import useCityStore from '@/store/modules/city';
  import CityGroup from './cpns/CityGroup.vue';

  const inputValue = ref('');
  const active = ref('');

  const router = useRouter();

  //获取store
  const cityStore = useCityStore();

  const { cityData } = storeToRefs(cityStore);
  // const cityData = toRef(cityStore.cityData)
  //组件挂载完毕
  onMounted(() => {
    //获取所有城市数据
    cityStore.getAllCityData();
  });


  const cancelClick = () => {
    router.back();
  }

  const clearClick = () => {
    console.log('clear')
  }

</script>


<style lang='less' scoped >
  .city {
    .city_top {
      height: 100px;
    }

    .city_content {
      height: calc(100vh - 100px);
      // overflow: hidden;
      overflow-y: auto;
    }

    .load {
      text-align: center;
    }
  }
 
</style>
