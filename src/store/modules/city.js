import { defineStore } from "pinia";

import { getAllCity } from "@/service";

const useCityStore = defineStore('city', {
  state: () => {
    return {
      cityData: {},
      currCity: {
        cityName: '泰安'
      }
    }
  },
  actions: {
    async getAllCityData() {
      const cityData = await getAllCity();
      this.cityData = cityData;
    },
    setCurrentCity(data) {
      this.currCity = data;
    }
  }
});

export default useCityStore;