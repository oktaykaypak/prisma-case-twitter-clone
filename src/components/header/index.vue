<template>
  <div class="d-flex flex-column">
    <div
      v-for="item in menuItems"
      :key="item.id"
      class="menu menu-items d-flex justify-content-start"
    >
      <div class="item">
        <i :class="'bi bi-' + item.icon"></i>
        {{ item.text }}
        <span v-if="item.count" class="count">{{ item.count }}</span>
      </div>
    </div>
    <button class="btn-twt">Tweetle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, icon: "twitter", text: "", count: null },
        { id: 1, icon: "house-door-fill", text: "Anasayfa", count: '' },
        { id: 2, icon: "hash", text: "Kesfet", count: null },
        { id: 3, icon: "bell", text: "Bildirimler", count: 2 },
        { id: 4, icon: "envelope", text: "Mesajlar", count: null },
        { id: 5, icon: "bookmark", text: "Yer Isaretleri", count: null },
        { id: 6, icon: "file-text", text: "Listeler", count: null },
        { id: 7, icon: "person", text: "Profil", count: null },
        { id: 8, icon: "three-dots", text: "Daha Fazla", count: null },
      ],
    };
  },
};
</script>

<style></style>
