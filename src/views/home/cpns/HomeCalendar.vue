<template>
  <div class='home_calendar'>
    <div class="select_date" @click="dateClick">
      <div class="start_date">
        <span class="grey">入住</span>
        <span>{{ startDay }}</span>
      </div>
      <div class="all_days">共{{ allDay }}晚</div>
      <div class="end_date">
        <span class="grey">离店</span>
        <span>{{ endDay }}</span>
      </div>
    </div>
    <div class="describe grey">
      <div class="price">价格不限</div>
      <div class="person">人数不限</div>
    </div>
    <div class="grey">关键字/位置/民宿名</div>
    <van-calendar 
      :show="showCalendar" 
      type="range" 
      color="#ff9854"
      @confirm="onConfirm" />
  </div>
</template>


<script setup>
  import { ref, computed } from 'vue';
  import { formatDate, calculateDays } from '@/utils/format_date';

  //设置Claendar状态
  const showCalendar = ref(false);

  //获取日期对象
  const dateObj = new Date();
  const startDay = ref(formatDate(dateObj));
  const endDay = ref(formatDate(dateObj.getTime() + 24*60*60*1000));
  const allDay = ref(1);
  //日期选择面板点击事件
  const dateClick = () => {
    showCalendar.value = true;
  }

  //日期面板确认事件
  const onConfirm = (value) => {
    const start = value[0];
    const end = value[1];
    startDay.value = formatDate(start);
    endDay.value = formatDate(end);
    allDay.value = calculateDays(start, end);
    showCalendar.value = false;
   
  }
</script>


<style lang='less' scoped >
  .home_calendar {
    // --van-calendar-popup-height: 100% !important;
    padding-left: 15px;
    .select_date {

      display: flex;
      align-items: center;

      div {
        flex: 0 0 33.33%;
        display: flex;
        flex-direction: column;
        justify-content: center;

      }
    }

    .describe {
      display: flex;
      height: 50px;
      align-items: center;

      .price {
        flex: 0, 0, 66.6%;
        width: 66.6%;
      }
      .person {
        flex: 0, 0, 33.3%;
        width: 33.3%;
      }
      
    }
    .grey {
      color: #cececd;
      margin: 5px 0px;
    }
  }
</style>
