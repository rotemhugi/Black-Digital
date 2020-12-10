<template>
  <div id="push">
    <v-footer id="app-footer" app inset no-gutters fixed height="50%">
      <v-avatar tile id="txtDev">
        <v-img src="../assets/unitSymbol.png"></v-img>
      </v-avatar>
      <small>פותח ע"י יחידת שחר</small>
      <v-spacer/>
      <small id="txtBam">בסיווג בלמ"ס בלבד</small>
    </v-footer>
  </div>
</template>

<script>
  export default {
    name: "appFooter"
  };
</script>

<style scoped>
  div#push {
    height: 50px;
  }
</style>