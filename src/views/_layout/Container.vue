<template>
  <v-app id="inspire">

    <v-toolbar
      color="pink darken-1"
      dark
      dense
      fixed
    >
      <v-toolbar-title class="mr-4">Vue Interview Demo</v-toolbar-title>
    </v-toolbar>

    <v-content class="mt-5">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer>
      <v-spacer></v-spacer>
      <div>
        &copy; {{ new Date().getFullYear() }} - <strong>JYB</strong>
      </div>
      <v-spacer></v-spacer>
    </v-footer>

  </v-app>
</template>
