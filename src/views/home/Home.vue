<template>
  <HomeHeader/>
  <HomeCalendar/>
  <HomeHotSuggest :hotData="hotSuggestData"/>
</template>

<script setup>
  import HomeHeader from './cpns/HomeHeader.vue';
  import HomeCalendar from './cpns/HomeCalendar.vue';
  import HomeHotSuggest from './cpns/HomeHotSuggest.vue';

  import { onMounted } from 'vue';
  import useHomeStore from '@/store/modules/home';
  import { storeToRefs } from 'pinia';

  const homeStore = useHomeStore();
  const { hotSuggestData } = storeToRefs(homeStore);

  onMounted(() => {
    homeStore.getHotSuggestData();
  });

  
</script>

<style lang='less' scoped >
</style>