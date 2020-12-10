<template>
  <v-container>
    <v-row>
      <v-card class="mx-auto" height=230 width=230 @click="openCurrLink">
        <v-avatar tile size=180 class="img">
          <v-img class="black--text" :src="getImg"/> 
        </v-avatar>
        <v-row class="detailsRow">
          <div>{{ this.currLink.name }}</div>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "currLink",

  props: { 
    currLink: Object 
  },

  computed: {
    getImg: function() {
      return require('../assets/linksLogo/' + this.currLink.image + '.png')
    }
  },
  methods: {
    openCurrLink() {
      window.open(this.currLink.link);
    },
  },
};
</script>

<style>
  .detailsRow{
    justify-content: center;
    margin-right: 0.001rem;
    margin-top: 0.1rem;
    width: 14.4rem;
    height: 2rem;
    background-color: rgb(245, 197, 108);
  }

  .img {
      margin-top: 7%;
      margin-right: 10%;
  }
  
</style>
