<template>
  <div class="row position-fixed">
    <div class="col-12">
      <!-- input -->
      <div class="row p-3">
        <div
          class="col-12 d-flex search align-items-center p-2"
          :class="{ active: isSearch }"
        >
          <i class="bi bi-search me-3"></i>
          <input
            type="text"
            class="w-100"
            @focus="isSearch = true"
            @blur="isSearch = false"
            placeholder="Twitter'da Ara"
          />
        </div>
      </div>
      <!-- gundem -->
      <div class="row">
        <div class="col-12">
          <div class="card w-100">
            <div class="card-header d-flex justify-content-between">
              İlgini çekebilecek gündemler <i class="bi bi-gear"></i>
            </div>
            <div class="card-body">
              <div
                v-for="twit in tweetArr"
                :key="twit.id"
                class="t-items d-flex justify-content-between"
              >
                <div class="t-items-content">
                  <div class="t-items-content-cat">{{ twit.cat }}</div>
                  <div class="t-items-content-title">{{ twit.title }}</div>
                  <div class="t-items-content-count">
                    {{ convertCount(twit.twitCount) }}
                    Tweet
                  </div>
                </div>
                <i class="bi bi-three-dots more"></i>
              </div>
            </div>
            <div class="card-footer" @click="tCount = tCount === 5 ? 0 : 5">
              Daha Fazla Goster
            </div>
          </div>
        </div>
      </div>
      <!-- takip -->
      <div class="row mt-3">
        <div class="col-12">
          <div class="card">
            <div class="card-header">Kimi Takip Etmeli</div>
            <div class="card-body">
              <div
                v-for="f in follow"
                :key="f.id"
                class="f-items d-flex justify-content-between"
              >
                <img :src="f.img" alt="" />
                <div class="f-items-text">
                  {{ f.user }} <span> @{{ f.userName }}</span>
                </div>
                <button class="btn btn-black">Takip Et</button>
              </div>
            </div>
            <div class="card-footer">Daha Fazla Goster</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSearch: false,
      twits: [
        {
          id: 1,
          cat: "Spor · Gundemdekiler",
          title: "#FBvsTS",
          twitCount: 3548,
        },
        {
          id: 2,
          cat: "Turkiye Konumunda Gundemde",
          title: "ALLAH BELANIZI VERMESIN",
          twitCount: 4867,
        },
        {
          id: 3,
          cat: "Spor · Gundemdekiler",
          title: "#Fenerbahce",
          twitCount: 87100,
        },
        {
          id: 4,
          cat: "Eglence · Gundemdekiler",
          title: "#Fox TV",
          twitCount: 87100,
        },
        {
          id: 5,
          cat: "Unluler · Gundemdekiler",
          title: "#Feriha",
          twitCount: 1132,
        },
        {
          id: 6,
          cat: "Spor · Gundemdekiler",
          title: "#FBvsTS",
          twitCount: 3548,
        },
        {
          id: 7,
          cat: "Turkiye Konumunda Gundemde",
          title: "ALLAH BELANIZI VERMESIN",
          twitCount: 4867,
        },
        {
          id: 8,
          cat: "Spor · Gundemdekiler",
          title: "#Fenerbahce",
          twitCount: 87100,
        },
        {
          id: 9,
          cat: "Eglence · Gundemdekiler",
          title: "#Fox TV",
          twitCount: 87100,
        },
        {
          id: 10,
          cat: "Unluler · Gundemdekiler",
          title: "#Feriha",
          twitCount: 1132,
        },
      ],
      follow: [
        {
          id: 1,
          img: "https://pbs.twimg.com/profile_images/1430936570144698385/zAzcez-D_normal.jpg",
          user: "boga burcu gunlukler",
          userName: "bogaburcdiyorki",
        },
        {
          id: 1,
          img: "https://pbs.twimg.com/profile_images/1420463116404539396/mq_qFFi__normal.jpg",
          user: "Mimari Dekorasyon",
          userName: "ictasarimlar",
        },
        {
          id: 1,
          img: "https://pbs.twimg.com/profile_images/1335008605767159809/ILeuFBTF_normal.jpg",
          user: "Ogrencikce Variz",
          userName: "OgrendikceVariz",
        },
      ],
      tCount: 5,
    };
  },
  computed: {
    tweetArr() {
      return this.twits.slice(this.tCount);
    },
  },
  methods: {
    convertCount(number) {
      const countF = Intl.NumberFormat("en-US");
      const numberConverted =
        number > 10000
          ? countF.format(number / 10000) + "B"
          : countF.format(number);
      return numberConverted;
    },
  },
};
</script>

<style></style>
