<template>
  <div class='home_item'>
    <div class="context">
      <div class="type">{{ homeData.summaryText }}</div>
      <div class="describe">{{ homeData.houseName }}</div>
      <div class="bottom">
        <div class="rank">
          <van-rate 
            v-model="starCount" 
            :size="14"
            void-color="#eee"
            allow-half
            readonly
            />
        </div>
        <div class="price">{{formatPrice(homeData.finalPrice) }}</div>
      </div>
    </div>
    <img :src="homeData.image.url" alt="">
  </div>
</template>


<script setup>
import formatPrice from '@/utils/format_price';
import { ref, computed } from 'vue';

const starCount = computed(() => {
  return parseFloat(props.homeData.commentScore)
})

const props = defineProps({
  homeData: Object
 })
</script>


<style lang='less' scoped >
  .home_item {
    font-size: 14px;
    position: relative;
    height: 240px;
    background-image: url();
    background-size: 100% 100%;
    // color: white;
    img {
      width: 100%;
      height: 100%;
      border-radius: 7px;
    }
    .context {
      position: absolute;
      left: 0;
      top: 120px;
      padding: 10px;
      color: white;
      .describe {
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        max-height: 48px;
        line-height: 16px !important;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 5px 0;
        // white-space: nowrap;
      }
      .bottom {
        display: flex;
        margin-top: 15px;
        justify-content: space-between;
      }

    }

  }
</style>
