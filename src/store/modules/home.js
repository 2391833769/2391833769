import { defineStore } from "pinia";
import { getHotSuggest } from '@/service/index';

const useHomeStore = defineStore('home', {
  state: () => {
    return {
      hotSuggestData: []
    }
  },
  actions: {
    async getHotSuggestData() {
      const data = await getHotSuggest();
      this.hotSuggestData = data;
    }
  }
});

export default useHomeStore;