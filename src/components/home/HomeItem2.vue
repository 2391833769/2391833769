<template>
  <div class='home_item'>
    <img :src="homeData.image.url" alt=""/>
    <div class="context">
      <div class="address">
        <van-icon name="location-o" />
        {{ homeData.location }}
      </div>
      <div class="describe">{{ homeData.houseName }}</div>
      <div class="type">{{ homeData.summaryText }}</div>
      <div class="price">
        <div class="finalPrice">
          {{ formatPrice(homeData.finalPrice) }}
        </div>
        <div class="originPrice">{{ formatPrice(homeData.productPrice) }}</div>
        <div class="discount">已减{{ discount}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import formatPrice from '@/utils/format_price';
  import { ref, computed } from 'vue';

  const discount = computed(() => {
    return props.homeData.productPrice - props.homeData.finalPrice
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
    border-radius: 7px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100px;
      
    }

    .context {
      padding: 10px;
      color: black;
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
      .price {
        display: flex;
        margin-top: 15px;
        justify-content: flex-start;
        align-items: center;

        div {
          flex-grow: 0;
          margin-right: 1px;
        }

        .originPrice {
          text-decoration:line-through
        }
        .finalPrice {
          color: #edb695;
          
        }

        .discount {
          border-radius: 5px;
          background-color: #fd7771;
          color: white;
          padding: 1px 3px;
          margin-left:2px
        }

      }

    }

  }
</style>
