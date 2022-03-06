<template>
  <div class="home">
    <div class="row border-end border-start">
      <div class="col-12 p-3 position-relative">
        <div class="head d-flex justify-content-between">
          Anasayfa <i class="bi bi-stars"></i>
        </div>
      </div>
    </div>
    <div class="row pt-3 border-end border-start">
      <div class="col-12">
        <div class="new-t">
          <div class="new-t-img">
            <img
              src="https://pbs.twimg.com/profile_images/1073302290864488449/mJqSVup4_normal.jpg"
              alt=""
            />
          </div>
          <div class="new-t-write">
            <textarea
              type="text"
              maxlength="120"
              placeholder=" Neler Oluyor?"
              class="w-100"
            />
            <div class="new-t-extends">
              <div class="new-t-extends-icons">
                <i class="bi bi-image more"></i>
                <i class="bi bi-bar-chart-steps more"></i>
                <i class="bi bi-emoji-smile more"></i>
                <i class="bi bi-calendar2-date more"></i>
                <i class="bi bi-geo-alt more"></i>
              </div>
              <div class="new-t-button">
                <button class="btn btn-blue">Tweetle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row border">
      <div class="col-12 p-0">
        <div v-for="t in t.tweets" :key="t.id">
          <div class="t-content border-bottom p-2">
            <img :src="t.avatar" class="t-content-image me-3" />
            <div class="t-content-text">
              <div class="t-content-name">
                <span>
                  {{ t.screenName }}
                  <span>
                    {{ convertDate(t.created_at) }}
                  </span>
                </span>
                <span class=""><i class="bi bi-three-dots"></i></span>
              </div>
              <div class="t-content-tweet">
                {{ t.text }}
              </div>
              <div class="t-content-icons">
                <div class="t-content-icons-icon">
                  <i class="bi bi-chat"></i> {{ t.comment }}
                </div>
                <div class="t-content-icons-icon">
                  <i class="bi bi-arrow-repeat"></i>{{ t.retweet }}
                </div>
                <div class="t-content-icons-icon">
                  <i class="bi bi-heart"></i> {{ t.like }}
                </div>
                <div class="t-content-icons-icon">
                  <i class="bi bi-upload"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTweetStore } from "../store/tweets";
import moment from "moment";

export default {
  name: "Home",
  beforeMount() {
    /** 
     * *This function pulls tweets from pinia.  
     *  */
    useTweetStore().getTweets();
    document.title = "(2) Anasayfa";
  },
  methods: {
    convertDate(date) {
      /**  
       * *This function returns the date formats from the pinia by using the moment js library by editing it as specified.
       * *It only takes the date variable in it.
      */
      return moment(date).format("DD MMM YYYY HH:mm");
    },
  },
  setup() {
    const t = useTweetStore();

    return {
      t,
    };
  },
};
</script>
