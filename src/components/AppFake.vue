<template>
  <div class="app-top-bar">
    <v-app-bar color="orange darken-2" app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>True or False? </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="orange darken-2"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/paginaNoticias">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-head-check-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title> Cheque os fatos</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/paginaDenuncias">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-head-remove-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Informe FakeNews</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>

      
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}
</style>