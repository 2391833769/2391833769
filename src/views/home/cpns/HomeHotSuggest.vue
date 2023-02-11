<template>
  <div class='hot_suggest'>
    <ul>
      <li v-for="item in hotData">
        {{ item.tagText.text }}
      </li>
    </ul>
  </div>
</template>


<script setup>
  defineProps({
    hotData: {
      type: Array,
      default: () => []
    }
  })
</script>


<style lang='less' scoped >
  .hot_suggest {
    margin-left: 15px;
    margin-top: 20px;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        flex-grow: 0;
        flex-shrink: 0;
        background-color: rgba(206, 206, 205, 0.2);
        border-radius: 10px;
        padding: 5px;
        margin: 5px;
      }
    }
  }
</style>
