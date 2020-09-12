<template>
  <div>
    <Row class="agenda-detail-row" style="margin-top: -4px">
      <Col class="agenda-detail-pr" :lg="{span: 8, push: 8}" :md="24" :sm="24" :xs="24">
        <Col class="agenda-title-pr">
          <img class="agenda-title" src="../assets/agenda_title.png" />

          <Row class="agend-title-select-pa">
            <Col class="agenda-title-select-pr" v-for="n in 6" :key="n">
              <img
                :class="n == agenda ? 'agenda-title-select' : 'agenda-title-select agenda-title-select-hidden'"
                src="../assets/agenda_selected.png"
              />
              <img class="agenda-title-select-line" :src="'./img/agenda/select_cut_line.png'" />
            </Col>
          </Row>

          <Row class="agenda-title-text-row">
            <Col class="agenda-title-text" span="5">تأهيلات</Col>
            <!-- <Col class="agenda-title-text" span="5">تصفيات 1</Col>-->
            <Col class="agenda-title-text" span="5">تصفيات</Col>
            <Col class="agenda-title-text" span="5">أعلى 16</Col>
            <Col class="agenda-title-text" span="5">أعلى 8</Col>
            <Col class="agenda-title-text" span="5">نصف النهائي</Col>
            <Col class="agenda-title-text" span="5">النهائي</Col>
          </Row>
        </Col>

        <!-- 1 -->
        <Col class="agenda-detail-col" span="5">
          <Row style="display: table; width: 100%; height: 100%">
            <Col style="min-width: 100%; display: table-cell; height: 960px;">
              <Row
                style="display: table-row; height: 60px;"
                v-for="vs in versus.rank.match"
                v-bind:key="vs[0]"
              >
                <div style="display: table-cell; vertical-align: middle;">
                  <Versus :sid1="vs[0]" :sid2="vs[1]" :date="versus.rank.date" :status="vs[2]" />
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col class="agenda-detail-col" span="5">
          <Row style="display: table; width: 100%; height: 100%">
            <Col style="min-width: 100%; display: table-cell; height: 960px;">
              <Row
                style="display: table-row; height: 60px;"
                v-for="vs in versus.top16.match"
                v-bind:key="vs[0]"
              >
                <div style="display: table-cell; vertical-align: middle;">
                  <Versus :sid1="vs[0]" :sid2="vs[1]" :date="versus.top16.date" :status="vs[2]" />
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
        <!-- 2 -->
        <Col class="agenda-detail-col" span="5">
          <Row style="display: table; width: 100%; height: 100%">
            <Col style="min-width: 100%; display: table-cell; height: 960px;">
              <Row style="display: table-row; height: 120px;" v-for="n1 in 8" v-bind:key="n1">
                <Col style="min-width: 100%; display: table-cell; height: 60px;">
                  <div style="position: absolute; top: 25%; left: 50%;">
                    <img
                      style="width: 2px; height: 60px; visibility: hidden;"
                      v-bind:src="'./img/agenda/line1.png'"
                    />
                  </div>
                  <div style="position: absolute; top: 38.8%; left: -10px; right: 50%">
                    <img
                      style="width: 100%; height: 3px; visibility: hidden;"
                      v-bind:src="'./img/agenda/line2.png'"
                    />
                  </div>
                  <Row style="display: table-row; height: 60px;" v-for="n2 in 2" v-bind:key="n2">
                    <div style="display: table-cell; vertical-align: middle;">
                      <Versus
                        :sid1="versus.top162.match[2*n1+n2-3][0]"
                        :sid2="versus.top162.match[2*n1+n2-3][1]"
                        :date="versus.top162.date"
                        :status="versus.top162.match[2*n1+n2-3][2]"
                      />
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <!-- 3 -->
        <Col class="agenda-detail-col" span="5">
          <Row style="display: table; width: 100%; height: 100%">
            <Col style="min-width: 100%; display: table-cell; height: 960px;">
              <Row style="display: table-row; height: 120px;" v-for="n1 in 4" v-bind:key="n1">
                <Col style="min-width: 100%; display: table-cell; height: 120px;">
                  <div style="position: absolute; top: 25%; left: 50%;">
                    <img
                      style="width: 2px; height: 120px; visibility: hidden;"
                      v-bind:src="'./img/agenda/line1.png'"
                    />
                  </div>
                  <div style="position: absolute; top: 43%; left: -10px; right: 50%">
                    <img
                      style="width: 100% ; height: 3px; visibility: hidden;"
                      v-bind:src="'./img/agenda/line2.png'"
                    />
                  </div>
                  <Row style="display: table-row; height: 120px;" v-for="n2 in 2" v-bind:key="n2">
                    <div style="display: table-cell; vertical-align: middle;">
                      <Versus
                        :sid1="versus.top8.match[2*n1+n2-3][0]"
                        :sid2="versus.top8.match[2*n1+n2-3][1]"
                        :date="versus.top8.date"
                        :status="versus.top8.match[2*n1+n2-3][2]"
                      />
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <!-- 4 -->
        <Col class="agenda-detail-col" span="5">
          <Row style="display: table; width: 100%; height: 100%">
            <Col style="min-width: 100%; display: table-cell; height: 960px;">
              <Row style="display: table-row; height: 240px;" v-for="n1 in 2" v-bind:key="n1">
                <Col style="min-width: 100%; display: table-cell; height: 240px;">
                  <div style="position: absolute; top: 25%; left: 50%;">
                    <img style="width: 2px; height: 240px;" v-bind:src="'./img/agenda/line1.png'" />
                  </div>
                  <div style="position: absolute; top: 46.7%; left: -10px; right: 50%">
                    <img style="width: 100% ; height: 3px;" v-bind:src="'./img/agenda/line2.png'" />
                  </div>
                  <Row style="display: table-row; height: 240px;" v-for="n2 in 2" v-bind:key="n2">
                    <div style="display: table-cell; vertical-align: middle;">
                      <Versus
                        :sid1="versus.top4.match[2*n1+n2-3][0]"
                        :sid2="versus.top4.match[2*n1+n2-3][1]"
                        :date="versus.top4.date"
                        :status="versus.top4.match[2*n1+n2-3][2]"
                      />
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <!-- 5 -->
        <Col class="agenda-detail-col" span="5">
          <Row style="display: table; width: 100%; height: 100%">
            <Col style="min-width: 100%; display: table-cell; height: 960px;">
              <Row style="display: table-row; height: 480px;">
                <!-- 每两row 分一个 col -->
                <Col style="min-width: 100%; display: table-cell; height: 480px;">
                  <div style="position: absolute; top: 25%; left: 50%;">
                    <img style="width: 2px; height: 480px;" v-bind:src="'./img/agenda/line1.png'" />
                  </div>
                  <div style="position: absolute; top: 48.3%; left: -10px; right: 50%">
                    <img style="width: 100% ; height: 3px;" v-bind:src="'./img/agenda/line2.png'" />
                  </div>
                  <Row style="display: table-row; height: 480px;" v-for="n in 2" v-bind:key="n">
                    <div style="display: table-cell; vertical-align: middle;">
                      <Versus
                        :sid1="versus.top2.match[n-1][0]"
                        :sid2="versus.top2.match[n-1][1]"
                        :date="versus.top2.date"
                        :status="versus.top2.match[n-1][2]"
                      />
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <!-- 6 -->
        <Col class="agenda-detail-col" span="5">
          <Row style="display: table; width: 100%; height: 100%">
            <Col style="min-width: 100%; display: table-cell">
              <Row style="display: table-row; height: 960px;">
                <Col style="min-width: 100%; display: table-cell; height: 960px;">
                  <div style="position: absolute; top: 25%; left: 50%;">
                    <img
                      style="width: 2px; height: 960px; visibility: hidden;"
                      v-bind:src="'./img/agenda/line1.png'"
                    />
                  </div>
                  <div style="position: absolute; top: 49.2%; left: -10px; right: 50%">
                    <img
                      style="width: 100% ; height: 3px; visibility: hidden;"
                      v-bind:src="'./img/agenda/line2.png'"
                    />
                  </div>
                  <Row style="display: table-row; height: 960px;">
                    <div style="display: table-cell; vertical-align: middle;">
                      <Versus
                        :sid1="versus.top.match[0][0]"
                        :sid2="versus.top.match[0][1]"
                        :date="versus.top.date"
                        :status="versus.top.match[0][2]"
                      />
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <!-- 7 -->
        <!-- 注释掉, 少了一回合
        <Col class="agenda-detail-col" span="5">
          <Row style="display: table; width: 100%; height: 100%">
            <Col style="min-width: 100%; display: table-cell; height: 960px;">
              <Row style="display: table-row; height: 1920px;">
                <div style="display: table-cell; vertical-align: middle;">
                  <Versus
                    style="max-width: 90%"
                    :sid1="60"
                    :sid2="21"
                    date="2019-12-12"
                    :status="0"
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
        -->
      </Col>
    </Row>
  </div>
</template>

<script>
import Versus from "./Versus.vue";

export default {
  name: "Agenda",
  components: {
    Versus
  },

  props: ["group"],

  data() {
    return {
      agenda: 1,
      versus1: {
        rank: {
          date: "2020-08-28",
          match: [
            [1, 71, 1],
            [2, 61, 1],
            [13, 82, 1],
            [22, 72, 2],
            [23, 69, 1],
            [27, 64, 1],
            [30, 73, 2],
            [31, 78, 1],
            [33, 89, 1],
            [36, 93, 1],
            [41, 94, 1],
            [43, 20, 2],
            [54, 42, 1],
            [56, 104, 1],
            [62, 96, 1],
            [85, 128, 1],
            [90, 32, 2],
            [98, 14, 1],
            [101, 115, 2],
            [102, 121, 1],
            [103, 117, 1],
            [74, 91, 1],
            [109, 45, 2],
            [110, 57, 2],
            [126, 118, 1],
            [127, 112, 1],
            [55, 65, 1],
            [29, 53, 1],
            [51, 58, 1],
            [17, 34, 2],
            [132, 148, 2],
            [135, 139, 2],
            [155, 142, 1],
            [143, 158, 1],
            [145, 153, 2],
            [147, 133, 1],
            [149, 150, 1],
            [151, 162, 1],
            [146, 154, 2],
            [141, 159, 1],
            [157, 144, 1],
            [156, 160, 1],
            [161, 152, 1],
            [163, 125, 2]
          ]
        },
        top16: {
          date: "2020-09-04",
          match: [
            [2, 72, 1],
            [54, 78, 1],
            [23, 89, 1],
            [31, 82, 1],
            [56, 57, 1],
            [55, 58, 1],
            [85, 74, 2],
            [73, 17, 1],
            [36, 125, 1],
            [33, 64, 1],
            [62, 98, 1],
            [1, 101, 1],
            [41, 121, 1],
            [34, 139, 1],
            [51, 149, 1],
            [127, 109, 1],
            [27, 141, 1],
            [20, 153, 1],
            [13, 148, 1],
            [103, 155, 1],
            [29, 147, 1],
            [32, 143, 1],
            [102, 157, 1],
            [132, 156, 1],
            [45, 154, 1],
            [126, 161, 1],
            [115, 151, 1],
          ]
        },
        top162: {
          date: "2020-09-11",
          match: [
            [2, 78, 1],
            [54, 17, 1],
            [23, 73, 2],
            [31, 20, 1],
            [56, 51, 1],
            [55, 29, 1],
            [34, 33, 1],
            [1, 45, 1],
            [36, 115, 1],
            [27, 32, 1],
            [74, 126, 1],
            [62, 132, 1],
            [13, 102, 1],
            [41, 72, 1],
            [64, 127, 2],
            [57, 103 , 1],
          ]
        },
        top8: {
          date: "2020-09-18",
          match: [
            [34, 41, 0],
            [54, 73, 0],
            [31, 127, 0],
            [56, 74, 0],
            [27, 57, 0],
            [2, 13, 0],
            [36, 55, 0],
            [62, 1, 0],
          ]
        },
        top4: {
          date: "2020-09-25",
          match: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]
        },
        top2: {
          date: "2020-10-02",
          match: [
            [0, 0, 0],
            [0, 0, 0],
          ]
        },
        top: {
          date: "2020-10-09",
          match: [
            [0, 0, 0],
          ]
        }
      },
      versus2: {
        rank: {
          date: "2020-05-29",
          match: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]
        },
        top16: {
          date: "2020-06-05",
          match: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]
        },
        top8: {
          date: "2020-06-12",
          match: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]
        },
        top4: {
          date: "2020-06-19",
          match: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]
        },
        top2: {
          date: "2020-06-26",
          match: [
            [0, 0, 0],
            [0, 0, 0],
          ]
        },
        top: {
          date: "2020-07-03",
          match: [
            [0, 0, 0],
          ]
        }
      }
    };
  },

  computed: {
    versus: function() {
      if (this.group == 1) {
        return this.versus1;
      } else {
        return this.versus2;
      }
    }
  },

  mounted() {
    if (this.agenda >= 4) {
      let agendaView = this.$el.querySelector(".agenda-detail-pr");
      agendaView.scrollLeft = -9999;
    }
  }
};
</script>

<style scoped>
.agenda-title-pr {
  position: relative;
  text-align: center;
  color: orange;
  height: 40px;
}

.agenda-title {
  display: block;
  /* width: 145.833333%; */
  width: 125%;
  height: 40px;
}

.agend-title-select-pa {
  position: absolute;
  width: 100%;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.agenda-title-select-pr {
  display: inline-block;
  float: none;
  width: 20.8333%;
}

.agenda-title-select {
  display: inline;
  width: 99%;
  height: 40px;
}

.agenda-title-select-hidden {
  visibility: hidden;
}

.agenda-title-select-line {
  display: inline;
  width: 1%;
  height: 40px;
}

.agenda-title-text-row {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: larger;
}

.agenda-title-text {
  display: inline-block;
  float: none;
}
.agenda-detail-row {
  display: inline-block;
  width: 100%;
  /* height: 3300px; */
  height: 2700px;
}

.agenda-detail-pr {
  position: relative;
  height: 100%;
  text-align: center;
  background: rgb(32, 25, 20);
  overflow: hidden;
  white-space: nowrap;
}

.agenda-detail-pr:hover {
  overflow-x: auto;
  overflow-y: hidden;
}

.agenda-detail-col {
  border: solid black 1px;
  border-top: 0;
  border-left: 0;
  top: 0;
  height: 100%;
  display: inline-block;
  float: none;
}

.agenda-detail-result {
  display: block;
  max-width: 90%;
  max-height: 100%;
  width: auto;
  height: auto;
  margin: 0 auto;
}

.vcenter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>