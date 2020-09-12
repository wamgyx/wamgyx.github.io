<template>
  <div>
    <Row>
      <Col class="top" :lg="{span: 8, push: 8}" :md="24" :sm="24" :xs="24">
        <img class="top-bg" alt="BG.png" :src="'./img/title_bg_9.png'" />
        <div class="title1-select-pa">
          <div class="title1-select-pr">
            <img class="title1-bg" alt="title1_png" src="../assets/title1_old.png" />

            <!-- 选中菜单 -->
            <div class="title1-selected-common title1-selected-1" v-if="isScore">
              <img
                class="title1-selected-img"
                alt="title1_selected1"
                src="../assets/title1_selected_old.png"
              />
              <Col class="title1-text-common title1-text-selected">
                <Button
                  type="text"
                  ghost
                  size="large"
                  disabled
                  class="centered"
                  style="color: rgb(55,32,23)"
                >القوانين</Button>
              </Col>
            </div>
            <div class="title1-selected-common title1-selected-2" v-if="isReward">
              <img
                class="title1-selected-img"
                alt="title1_selected2"
                src="../assets/title1_selected_old.png"
              />
              <Col class="title1-text-common title1-text-selected">
                <Button
                  type="text"
                  ghost
                  size="large"
                  disabled
                  class="centered"
                  style="color: rgb(55,32,23)"
                >الجوائز</Button>
              </Col>
            </div>
            <!--<div class="title1-selected-common title1-selected-3" v-if="isAgenda2">-->
              <!--<img-->
                <!--class="title1-selected-img"-->
                <!--alt="title1_selected3"-->
                <!--src="../assets/title1_selected.png"-->
              <!--/>-->
              <!--<Col class="title1-text-common title1-text-selected">-->
                <!--<Button-->
                  <!--type="text"-->
                  <!--ghost-->
                  <!--size="large"-->
                  <!--class="centered"-->
                  <!--style="color: rgb(55,32,23)"-->
                <!--&gt;البطولة 2</Button>-->
              <!--</Col>-->
            <!--</div>-->
            <div class="title1-selected-common title1-selected-4" v-if="isAgenda1">
              <img
                class="title1-selected-img"
                alt="title1_selected4"
                src="../assets/title1_selected_old.png"
              />
              <Col class="title1-text-common title1-text-selected">
                <Button
                  type="text"
                  ghost
                  size="large"
                  class="centered"
                  style="color: rgb(55,32,23)"
                >جدول البطولة</Button>
              </Col>
            </div>

            <!-- 未选中菜单 -->
            <Col class="title1-text-common1 title1-text-selecting" v-if="!isScore">
              <Button
                type="text"
                ghost
                size="large"
                style="color: rgb(209,171,105);"
                @click="$emit('switch', 'score')"
              >القوانين</Button>
            </Col>
            <Col class="title1-text-common2 title1-text-selecting" v-if="!isReward">
              <Button
                type="text"
                ghost
                size="large"
                style="color: rgb(209,171,105);"
                @click="$emit('switch', 'reward')"
              >الجوائز</Button>
            </Col>
            <!--<Col class="title1-text-common3 title1-text-selecting" v-if="!isAgenda2">-->
              <!--<Button-->
                <!--type="text"-->
                <!--ghost-->
                <!--size="large"-->
                <!--style="color: rgb(209,171,105);"-->
                <!--@click="$emit('switch', 'agenda2')"-->
                <!--@mouseover.native="setAgendaHover(true)"-->
                <!--@mouseout.native="setAgendaHover(false)"-->
              <!--&gt;البطولة 2</Button>-->
            <!--</Col>-->
            <Col class="title1-text-common4 title1-text-selecting" v-if="!isAgenda1">
              <Button
                type="text"
                ghost
                size="large"
                style="color: rgb(209,171,105);"
                @click="$emit('switch', 'agenda1')"
                @mouseover.native="setAgendaHover(true)"
                @mouseout.native="setAgendaHover(false)"
              >جدول البطولة</Button>
            </Col>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["tab", "group"],

  data: function() {
    return {
      isAgendaHover: false,
      isAgendaListHover: false
    };
  },

  computed: {
    isAgenda: function() {
      return this.tab == "agenda";
    },
    isAgenda1: function() {
      return this.tab == "agenda" && this.group == 1;
    },
    isAgenda2: function() {
      return this.tab == "agenda" && this.group == 2;
    },
    isReward: function() {
      return this.tab == "reward";
    },
    isScore: function() {
      return this.tab == "score";
    }
  },

  methods: {
    say: function(message) {
      alert(message);
    },
    setAgendaHover: function(v) {
      this.isAgendaListHover = v;
      if (v) {
        this.isAgendaHover = true;
        setTimeout(
          function() {
            if (!this.isAgendaListHover) {
              this.isAgendaHover = false;
            } else {
              this.setAgendaHover(true);
            }
          }.bind(this),
          2000
        );
      }
    },
    getAgendaHover: function() {
      return this.isAgendaHover;
    }
  }
};
</script>

<style scoped>
.ivu-btn:focus {
  box-shadow: none;
}

.top {
  position: relative;
  margin: 0;
  padding: 0;
}

.top-bg {
  width: 100%;
  height: auto;
}

.title1-select-pa {
  position: absolute;
  left: 0;
  bottom: 0;
}

.title1-select-pr {
  position: relative;
  left: 0;
  bottom: 0;
}

.title1-bg {
  width: 100%;
  height: auto;
}

.title1-selected-common {
  position: absolute;
  display: block;
  width: 30.3%;
  max-width: 100%;
  height: auto;
}

.title1-selected-img {
  max-width: 100%;
  bottom: 0px;
}

.title1-agenda-list-img {
  position: relative;
  z-index: 1;
  max-width: 98%;
  height: 35px;
  bottom: 0px;
  background: rgb(32, 25, 20);
}

.title1-selected-1 {
  top: 0;
  left: 5%;
}

.title1-selected-2 {
  top: 0;
  left: 35%;
}

.title1-selected-3 {
  top: 0;
  left: 50%;
}

.title1-selected-4 {
  top: 0;
  left: 64.5%;
}

.title1-agenda-list-1 {
  top: 95%;
  left: 65%;
  height: 30px;
  margin-top: 2px;
}

.title1-agenda-list-2 {
  top: 148%;
  left: 65%;
  height: 30px;
  margin-top: 8px;
}

@media screen and (max-width: 768px) {
  .title1-agenda-list-2 {
    margin-top: 18px;
  }
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title1-text-common {
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22.5%;
}

.title1-text-common1 {
  position: absolute;
  top: 46%;
  left: 19%;
  transform: translate(-50%, -50%);
  width: 30.3%;
}

.title1-text-common2 {
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30.3%;
}

.title1-text-common3 {
  position: absolute;
  top: 50%;
  left: 61.25%;
  transform: translate(-50%, -50%);
  width: 22.5%;
}

.title1-text-common4 {
  position: absolute;
  top: 46%;
  left: 82%;
  transform: translate(-50%, -50%);
  /*width: 22.5%;*/
  width: 30.3%;
}

.title1-text-selected {
  color: black;
}

.title1-text-selecting {
  color: orange;
}

.reward-title-pr {
  position: relative;
  text-align: center;
  height: 100%;
  color: orange;
}

.reward-title {
  display: block;
  max-width: 100%;
  height: auto;
}

.reward-title-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.reward-detail-title-pr {
  position: relative;
  text-align: center;
  color: orange;
  height: 15px;
}

.reward-detail-title {
  display: block;
  width: 100%;
  height: 7.5px;
}

.reward-detail-title2 {
  display: block;
  width: 100%;
  height: 7.5px;
  transform: scaleY(-1);
}

.reward-detail-title-text {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.reward-detail-reward-row {
  display: inline-block;
  width: 100%;
  height: 100%;
  height: 55px;
}

.reward-detail-reward-pr {
  position: relative;
  text-align: center;
  background: #725f49;
  height: 60px;
}

.reward_detail_city {
  display: block;
  width: auto;
  height: 40px;
  margin: auto;
}

.reward_detail_box {
  display: block;
  width: auto;
  height: 40px;
  margin: auto;
}

.reward_detail_officer {
  display: block;
  width: auto;
  height: 40px;
  margin: auto;
}

.reward_detail_rank {
  display: block;
  width: auto;
  height: 40px;
  margin: auto;
}
</style>
