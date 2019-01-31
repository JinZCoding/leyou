<template>
  <div class="interest">
    <all-header :banner="title"></all-header>
    <van-tabs v-model="active" color="#fedb09" @click="onTitleClick" swipeable sticky>
      <van-tab title="我的喜欢">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell
            v-for="(item, index) in list"
            :key="index"
            :title="item.title"
            is-link
            :to="'/article/'+item.id"
          />
        </van-list>
      </van-tab>
      <van-tab title="我的赞">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell
            v-for="(item, index) in list"
            :key="index"
            :title="item.title"
            is-link
            :to="'/article/'+item.id"
          />
        </van-list>
      </van-tab>
      <van-tab title="我的收藏">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell
            v-for="(item, index) in list"
            :key="index"
            :title="item.title"
            is-link
            :to="'/article/'+item.id"
          />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import AllHeader from "../../../components/header/header";
import { Tab, Tabs, List, Cell, CellGroup } from "vant";
import { apiUrl } from "apiUrl/index";

export default {
  data() {
    return {
      title: "",
      active: 0,
      list: [],
      loading: false,
      finished: false
    };
  },
  created() {
    // console.log(this.$route.query.active);
    this.active = this.$route.query.active;
    this.title =
      this.active === 0
        ? "我的喜欢"
        : this.active === 1
        ? "我的赞"
        : "我的收藏";
  },
  mounted() {
    this.initData();
  },
  components: {
    AllHeader
  },
  methods: {
    initData() {
      this.$post(apiUrl.queryMyInterest, { active: this.active })
        .then(res => {
          // console.log(res);
          if (res.result === 1 && res.code === 200) {
            if (this.active === 0) {
              this.list = res.data.likes;
            } else if (this.active === 1) {
              this.list = res.data.favorites;
            } else {
              this.list = res.data.praises;
            }
          } else {
            this.$toast(res.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 切换标签，显示不同列表
    onTitleClick(index, title) {
      console.log(title);
      this.title = title;
      this.active = index;
      this.initData();
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 6; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<style lang="scss">
.interest {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100%;
  background-color: #fff;
  z-index: 1000;
  .header {
    position: relative;
  }
  .van-cell {
    line-height: 80px;
    .van-cell__left-icon,
    .van-cell__right-icon {
      height: 80px;
      line-height: 80px;
    }
  }
  .van-cell__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
      font-size: 30px;
    }
  }
}
</style>

