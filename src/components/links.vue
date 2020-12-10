<template>
  <v-container>
    <slot class="left"></slot>
    <v-layout wrap>
      <v-flex v-for="item in this.items" :key="item.id">
        <currLink :currLink="item"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import currLink from "./currLink.vue";

export default {
  name: "currLinks",

  props: { 
    items: Array
  },

  components: { 
    currLink 
  },
};
</script>

<style scoped>
  .left {
    margin-right: 84%;
  }
</style>
