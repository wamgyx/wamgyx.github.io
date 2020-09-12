<template>
  <div>
    <!-- 冠军服 -->
    <Row style="display: inline-block; margin-top: -4px;">
      <Col class="reward-title-pr" :lg="{span: 8, push: 8}" :md="24" :sm="24" :xs="24">
        <img class="reward-title" src="../assets/reward_title.png" />
        <div class="reward-title-text">{{ data.title }}</div>
      </Col>
    </Row>
    <Row style="display: inline-block;">
      <Col class="reward-detail-title-pr" :lg="{span: 8, push: 8}" :md="24" :sm="24" :xs="24">
        <img class="reward-detail-title" src="../assets/reward_title_bg.png" />
        <img class="reward-detail-title2" src="../assets/reward_title_bg.png" />
        <Row class="reward-detail-title-text">
          <Col span="6">زينة القاعدة</Col>
          <Col span="3">التقنيات</Col>
          <Col span="4">أدوات الأشباح</Col>
          <Col span="4">الصناديق</Col>
          <Col span="4">الضباط</Col>
          <Col span="3">التصنيف</Col>
        </Row>
      </Col>
    </Row>
    <Row style="display: inline-block; width: 100%">
      <Row
        class="reward-detail-reward-row"
        style="margin-top: -8px;"
        v-for="rank in data.rank"
        :key="rank.rank"
      >
        <Col class="reward-detail-reward-pr" :lg="{span: 8, push: 8}" :md="24" :sm="24" :xs="24">
          <Row style="background: rgb(32, 25, 20); height: 60px;">
            <!-- 主城皮肤 -->
            <Col :span="rank.skin2?3:6" style="border: solid black 1px; border-left: none;">
              <Tooltip
                class="reward_detail_img"
                placement="top"
                theme="light"
                max-width="300"
                :transfer="true"
                v-if="rank.skin[0]"
              >
                <img class="reward_detail_img" :src="'./img/reward/' + rank.skin[0]" />
                <div slot="content" style="direction: rtl; text-align: right;">
                  <p v-for="segs in rank.skin[1].split('|')" :key="segs">{{ segs }}</p>
                </div>
              </Tooltip>
              <span class="reward_detail_rank_num_wrap" v-if="!rank.skin[0]">
                <span class="reward_detail_rank_num">---</span>
              </span>
              <span class="reward_detail_num">{{ rank.skin[2] ? rank.skin[2] : '&nbsp;' }}</span>
            </Col>
              <!-- 基地皮肤2 -->
              <Col v-if="rank.skin2" span="3" style="border: solid black 1px; border-left: none;">
                  <Tooltip
                          class="reward_detail_img"
                          placement="top"
                          theme="light"
                          max-width="300"
                          :transfer="true"
                          v-if="rank.skin2[0]"
                  >
                      <img class="reward_detail_img" :src="'./img/reward/' + rank.skin2[0]" />
                      <div slot="content" style="direction: rtl; text-align: right;">
                          <p v-for="segs in rank.skin2[1].split('|')" :key="segs">{{ segs }}</p>
                      </div>
                  </Tooltip>
                  <span class="reward_detail_rank_num_wrap" v-if="!rank.skin2[0]">
                <span class="reward_detail_rank_num">---</span>
              </span>
                  <span class="reward_detail_num">{{ rank.skin2[2] ? rank.skin2[2] : '&nbsp;' }}</span>
              </Col>
            <!-- 副官技巧 -->
            <Col span="3" style="border: solid black 1px; border-left: none;">
              <Tooltip
                class="reward_detail_img"
                placement="top"
                theme="light"
                max-width="300"
                :transfer="true"
                v-if="rank.skill[0]"
              >
                <img class="reward_detail_img" :src="'./img/reward/' + rank.skill[0]" />
                <div slot="content" style="direction: rtl; text-align: right;">
                  <p v-for="segs in rank.skill[1].split('|')" :key="segs">{{ segs }}</p>
                </div>
              </Tooltip>
              <span class="reward_detail_rank_num_wrap" v-if="!rank.skill[0]">
                <span class="reward_detail_rank_num">---</span>
              </span>
              <span class="reward_detail_num">{{ rank.skill[2] ? rank.skill[2] : '&nbsp;' }}</span>
            </Col>
            <!-- 队长碎片1 -->
            <!--<Col :span="rank.sf2 ? 3 : 6" style="border: solid black 1px; border-left: none;">-->
            <Col span="4" style="border: solid black 1px; border-left: none;">
              <Tooltip
                class="reward_detail_img"
                :content="rank.sf[1]"
                placement="top"
                theme="light"
                v-if="rank.sf[0]"
              >
                <img class="reward_detail_box" :src="'./img/reward/' + rank.sf[0]" />
              </Tooltip>
              <span class="reward_detail_rank_num_wrap" v-if="!rank.sf[0]">
                <span class="reward_detail_rank_num">---</span>
              </span>
              <span class="reward_detail_num">{{ rank.sf[2] ? rank.sf[2] : '&nbsp;' }}</span>
            </Col>
            <!-- 队长碎片2 -->
            <Col span="3" style="border: solid black 1px; border-left: none;" v-if="rank.sf2">
              <Tooltip
                class="reward_detail_img"
                :content="rank.sf2[1]"
                placement="top"
                theme="light"
                v-if="rank.sf2[0]"
              >
                <img class="reward_detail_box" :src="'./img/reward/' + rank.sf2[0]" />
              </Tooltip>
              <span class="reward_detail_rank_num_wrap" v-if="!rank.sf2[0]">
                <span class="reward_detail_rank_num">---</span>
              </span>
              <span class="reward_detail_num">{{ rank.sf2[2] ? rank.sf2[2] : '&nbsp;' }}</span>
            </Col>
            <!-- 宝箱 -->
            <Col span="4" style="border: solid black 1px; border-left: none;">
              <Tooltip
                class="reward_detail_img"
                placement="top"
                theme="light"
                max-width="300"
                :transfer="true"
                v-if="rank.box[0]"
              >
                <img class="reward_detail_img" :src="'./img/reward/' + rank.box[0]" />
                <div slot="content" style="direction: rtl; text-align: right;">
                  <p v-for="segs in rank.box[1].split('|')" :key="segs">{{ segs }}</p>
                </div>
              </Tooltip>
              <span class="reward_detail_rank_num_wrap" v-if="!rank.box[0]">
                <span class="reward_detail_rank_num">---</span>
              </span>
              <span class="reward_detail_num">{{ rank.box[2] ? rank.box[2] : '&nbsp;' }}</span>
            </Col>
            <!-- 副官 -->
            <Col span="4" style="border: solid black 1px; border-left: none;">
              <Tooltip
                class="reward_detail_img"
                placement="top"
                theme="light"
                max-width="300"
                :transfer="true"
                v-if="rank.officer[0]"
              >
                <img class="reward_detail_img" :src="'./img/reward/' + rank.officer[0]" />
                <div slot="content" style="direction: rtl; text-align: right;">
                  <p v-for="segs in rank.officer[1].split('|')" :key="segs">{{ segs }}</p>
                </div>
              </Tooltip>
              <span class="reward_detail_rank_num_wrap" v-if="!rank.officer[0]">
                <span class="reward_detail_rank_num">---</span>
              </span>
              <span class="reward_detail_num">{{ rank.officer[2] ? rank.officer[2] : '&nbsp;' }}</span>
            </Col>
            <!-- Rank -->
            <Col span="3" style="border: solid black 1px; border-left: none;">
              <img class="reward_detail_rank" v-if="rank.rank == '1'" src="../assets/1.png" />
              <img class="reward_detail_rank" v-else-if="rank.rank == '2'" src="../assets/2.png" />
              <img class="reward_detail_rank" v-else-if="rank.rank == '3'" src="../assets/3.png" />
              <span class="reward_detail_rank_num_wrap" v-else>
                <span class="reward_detail_rank_num">{{ rank.rank }}</span>
              </span>
              <span>&nbsp;</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  </div>
</template>

<script>
export default {
  name: "RewardDetail",
  props: ["data"]
};
</script>

<style scoped>
.reward-title-pr {
  position: relative;
  text-align: center;
  height: 100%;
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
  color: rgb(255, 236, 170);
  font-weight: bold;
}

.reward-detail-title-pr {
  position: relative;
  text-align: center;
  height: 24px;
}

.reward-detail-title {
  display: block;
  width: 100%;
  height: 12px;
}

.reward-detail-title2 {
  display: block;
  width: 100%;
  height: 12px;
  transform: scaleY(-1);
}

.reward-detail-title-text {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(183, 143, 85);
  font-weight: bold;
  font-size: xx-small;
}

.reward-detail-reward-row {
  display: inline-block;
  width: 100%;
  height: auto;
}

.reward-detail-reward-pr {
  position: relative;
  text-align: center;
  background: rgb(32, 25, 20);
  height: auto;
}

.reward_detail_box {
  display: block;
  width: auto;
  height: 40px;
  margin: auto;
}

.reward_detail_img {
  display: block;
  width: auto;
  height: 40px;
  margin: auto;
}

.reward_detail_num {
  color: rgb(145, 118, 74);
}

.reward_detail_rank {
  display: block;
  width: auto;
  height: 40px;
  margin: auto;
}

.reward_detail_rank_num_wrap {
  display: block;
  position: relative;
  width: 100%;
  height: 40px;
  color: rgb(145, 118, 74);
  font-weight: bold;
}

.reward_detail_rank_num {
  margin: 0;
  position: absolute;
  top: 70%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
}
</style>
