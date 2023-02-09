<template>
  <div class="home">
    <div class="home_header">
      <span>弘源旅途</span>
    </div>
    <div class="home_img">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="home_location">
      <div class="location_city">广州</div>
      <div class="location_mark" @click="locationClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>

const locationClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log(res)
  })
}
</script>


<style lang='less' scoped >
  .home {

    .home_header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      color: #eb9c69;
      font-weight: 700;

    }

    .home_img {

      img {
        width: 100%;
        height: auto;
      }
     
    }

    .home_location {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      padding: 20px 0px;

      .location_city {
        margin-left: 15px;
      }
      .location_mark {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80px;
        
        margin-right: 15px;


        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
</style>