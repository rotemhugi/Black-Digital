<template>
  <v-container class="menuSpace">
    <v-row>
      <v-col cols="6">
        <v-text-field class="txt-field mt-1" label="חפש מה שמעניין אותך..." v-model="search"
                      single-line dense solo rounded append-icon="search" ref="search"/>
      </v-col>
    </v-row>
    <links :items="filterLinks"/>
  </v-container>
</template>

<script>
import links from "./links.vue";
import store from "../store";

export default {
  name: "mainLinks",

  components: {
    links,
  },

  data() {
    return { 
            search: "",
            categoryLinks: [],
          };
  },

  computed: {
    filterLinks(){
      if(store.state.selectedCategory == ""){
        if(this.search == ""){
          return store.state.links.filter((currLink) => currLink.category !== 'preprod')
        }
        else{
          return store.state.links.filter((currLink) => currLink.name.includes(this.search) && 
                                                        currLink.category !== 'preprod')
        }
      }
      else{
        if(this.search == ""){
          return store.state.links.filter((currLink) => currLink.category == store.state.selectedCategory);
        }
        else{
          return store.state.links.filter((currLink) => currLink.category == store.state.selectedCategory && 
                                                        currLink.name.includes(this.search))
        }
      }
    }
  },
};
</script>

<style>
  .menuSpace {
      margin-top: -5px;
    }
</style>
