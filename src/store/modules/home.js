import { defineStore } from "pinia";
import { getCategories, getHotSuggest, getHouseList } from '@/service/index';

const useHomeStore = defineStore('home', {
  state: () => {
    return {
      hotSuggestData: [],
      categoriesData: {},
      currentPage: 0,
      houseListData: []
    }
  },
  actions: {
    async getHotSuggestData() {
      const data = await getHotSuggest();
      this.hotSuggestData = data;
    },
    async getCategoriesData() {
      const data = await getCategories();
      this.categoriesData = data;
    },
    async getHouseListData() {
       //更改请求数据页数
      this.currentPage++;
      
      const data = await getHouseList(this.currentPage);
      //填充数据
      this.houseListData.push(...data);
     
     
    }
  }
});

export default useHomeStore;