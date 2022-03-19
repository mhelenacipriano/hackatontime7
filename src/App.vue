<template>
  <v-app>
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