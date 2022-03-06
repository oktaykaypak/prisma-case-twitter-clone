import { defineStore } from "pinia";
import service from "../utils/service";
export const useTweetStore = defineStore({
  id: "tweets",
  state: () => ({
    rawT: [],
  }),
  getters: {
    tweets: (state) => {
      return state.rawT;
    },
  },
  actions: {
    async getTweets() {
      /**
       * * This function is used to access our data in fake db that we set up on mockdb.
       * * With axios, the request is sent to the "/tweet" API and the data is transferred to our rawT variable in the state.
       */
      const { data } = await service.get("/tweet");
      this.rawT = data;
    },
  },
});
