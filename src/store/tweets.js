import { defineStore } from "pinia";
import service from "../utils/service";
import moment from "moment";

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
      const mapped = data.map((item) => {
        return {
          id: item.id,
          avatar: item.avatar,
          screenName: item.screenName,
          created_at: item.created_at,
          text: item.text,
          comment: item.comment,
          retweet: item.retweet,
          like: item.like,
        };
      });
      this.rawT = mapped;
      console.log(mapped);
    },
    async postTweet(data) {
      const payload = {
        comment: 0,
        like: 0,
        retweet: 0,
        created_at: moment(),
        screenName: "oktaykaypak",
        id: 15,
        text: data,
        avatar:
          "https://pbs.twimg.com/profile_images/1073302290864488449/mJqSVup4_normal.jpg",
      };
      this.rawT.unshift(payload);
      if (localStorage.getItem("tweet")) {
        const fData = JSON.parse(localStorage.getItem("tweet"));
        fData.unshift(payload);
        localStorage.setItem("tweet", JSON.stringify(fData));
      } else {
        localStorage.setItem("tweet", JSON.stringify([payload]));
      }
    },
  },
});
