<template>
  <div id="app">
    <Header :tab="title" :group='group' v-on:switch="switchTab($event)" />
    <Reward v-if="title == 'reward'" />
    <Score v-if="title == 'score'" />
    <Agenda :group='group' v-if="title == 'agenda'" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Reward from "./components/Reward.vue";
import Score from "./components/Score.vue";
import Agenda from "./components/Agenda.vue";

export default {
  name: "app",
  components: {
    Header,
    Reward,
    Score,
    Agenda,
  },

  data() {
    return {
      title: "agenda",
      group: 1
    };
  },

  methods: {
    switchTab: function(tab) {
      if (tab.indexOf('agenda') == -1) {
        this.title = tab;
      } else {
        this.group = +tab[tab.length-1];
        this.title = 'agenda';
      }
    }
  }

  // watch: {
  //   tab: function(newTab, oldTab) {
  //     alert(newTab + oldTab);
  //   }
  // },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background: rgb(35, 27, 18);
  direction: rtl;
}
</style>
