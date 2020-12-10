<template>
  <v-navigation-drawer app right color="white">
    <v-list-item three-line>
      <div class="sideUsername">
        <v-img max-height="90px" max-width="170px" src="../assets/logo.png"/>
      </div>
    </v-list-item>

    <v-divider class="divPos"></v-divider>

    <v-list>
      <v-list-item>
        <v-btn color="black" text block class="btn_right" @click="selectedCategory('')">
          <v-icon class="pa-2">home</v-icon>
          <div>דף הבית</div>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn color="black" text block class="btn_right" @click="selectedCategory('mofet')">
          <v-icon class="pa-2">business</v-icon>
          <div>מופת</div>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn color="black" text block class="btn_right" @click="selectedCategory('mtv')">
          <v-icon class="pa-2">people</v-icon>
          <div>מיטב</div>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn color="black" text block class="btn_right" @click="selectedCategory('niul')">
          <v-icon class="pa-2">star</v-icon>
          <div>ניהול</div>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn color="black" text block class="btn_right" @click="selectedCategory('mkmshr')">
          <v-icon class="pa-2">widgets</v-icon>
          <div>מקמש"ר</div>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn color="black" text block class="btn_right" @click="selectedCategory('mkrpr')">
          <v-icon class="pa-2">email</v-icon>
          <div>מקרפ"ר</div>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn color="black" text block class="btn_right" @click="selectedCategory('preprod')">
          <v-icon class="pa-2">gavel</v-icon>
          <div>אתרים בפיתוח</div>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

  import store from "../store";

  export default {
    name: "sideMenu",

    methods: {
      selectedCategory(category) {
        store.commit("selectedCategory", category);
      }
    }
  };
</script>

<style>
  .btn_right {
    justify-content: start !important;
  }
  .divPos {
    margin-top: 15px;
  }
  .sideUsername {
    margin-top: 12px;
  }
</style>
