<template>
  <v-app>
    <div class="fontClass background fill-height">
      <sideMenu/>
      <v-content>
        <mainLinks/>
      </v-content>
      <app-footer/>
    </div>
  </v-app>
</template>

<script>
  import sideMenu from "./components/sideMenu.vue";
  import appFooter from "./components/appFooter.vue";
  import mainLinks from "./components/mainLinks.vue";

  export default {
    name: "App",

    components: {
      sideMenu,
      appFooter,
      mainLinks
    },
  };
</script>

<style>
  @font-face {
    font-family: "Alef Font";
    src: url(./assets/Alef-Regular.ttf);
  }
  .fontClass {
    font-family: "Alef Font" !important;
  }
  .background {
    background-color: #ffffff;
    background-position: top;
    background-repeat: repeat;
    background-size: 100%;
    position: relative;
    background-image: url(./assets/computerBackground.png);
  }
</style>
