<template>
  <div class="container">
    <img style="max-width: 90%" :src="src" />
    <div class="versus">{{ versus }}</div>
    <div class="date">{{ date }}</div>
  </div>
</template>

<script>
export default {
  name: "Versus",
  props: ["sid1", "sid2", "date", "status"],

  computed: {
    versus: function() {
      if (!this.sid1 || !this.sid2) {
        return "? \b \b vs \b \b ?";
      } else {
        return "S" + this.sid1 + " vs " + "S" + this.sid2;
      }
    },
    src: function() {
      switch (this.status) {
        case 0:
          return "./img/agenda/battle_ready.png";
        case 1:
          return "./img/agenda/left_win.png";
        case 2:
          return "./img/agenda/right_win.png";
        default:
          return "./img/agenda/battle_ready.png";
      }
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
}

.versus {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bolder;
  font-size: 0.8rem;
}

.date {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-weight: bolder;
  font-size: 0.6rem;
}
</style>
