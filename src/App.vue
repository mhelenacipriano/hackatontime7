<template>
  <v-app class="home">
    <AppFake />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppFake from "./components/AppFake.vue";

export default {
  name: "App",
  components: {
    AppFake
  },
};
</script>

<style scoped>
.home{
  background-color: #FFF3E0;
}
</style>