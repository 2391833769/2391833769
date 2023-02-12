<template>
  <div class='search'>
    search
    {{ route.query }}
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router';

  const route = useRoute();
  console.log(route.query.startDay)
</script>


<style lang='less' scoped >

</style>
