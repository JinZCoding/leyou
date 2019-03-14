<template>
  <li class="record_li">
    <div class="left_avatar">
      <img :src="item.author_img" alt width="50px">
    </div>
    <div class="right_info">
      <span class="name ellipsis">{{name}}</span>
      <p class="time">{{item.updatetime}}</p>
    </div>
    <div class="content_info">
      <p class="content">{{content}}</p>
      <div class="chart" v-if="imgurl">
        <img :src="imgurl" width="100%" alt>
      </div>
    </div>
    <div class="operation">
      <span class="to_like" @click="toLike">
        <i class="iconfont" v-if="!isLike">&#xe874;</i>
        <i class="iconfont" v-else>&#xe873;</i>
      </span>
      <span class="to_comment">
        <i class="iconfont">&#xe891;</i>
      </span>
    </div>
    <div class="likes" v-if="item.likes">
      <i class="iconfont">&#xe873;</i>
      ssss等{{item.likes}}人觉得很赞
    </div>
  </li>
</template>
<script>
export default {
  name: "RecordItem",
  data() {
    return {
      isLike: false
    };
  },
  props: ["item", "name", "content", "imgurl"],
  methods: {
    toLike() {
      this.isLike = !this.isLike;
      if (this.isLike) {
        this.item.likes += 1;
      } else {
        this.item.likes -= 1;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../style/mixin.scss";

.record_li {
  position: relative;
  min-height: 220px;
  background-color: #fff;
  margin: 0 0 25px;
  padding: 20px 30px 20px;
  border-bottom: 1px solid #eee;
  font-size: 28px;
  &:last-child {
    border: none;
  }
  .left_avatar {
    display: inline-block;
    position: absolute;
    top: 20px;
    img {
      border-radius: 50%;
    }
  }
  .right_info {
    display: inline-block;
    padding-left: 120px;
    width: 100%;
    min-height: 100px;
    .name {
      font-size: 34px;
      font-weight: 700;
    }
    .time {
      padding-top: 20px;
      color: #666;
    }
  }
  .content_info {
    padding: 10px;
    .content {
      padding: 10px 0;
      font-size: 30px;
      text-align: justify;
    }
    .chart {
      width: 100%;
      max-height: 300px;
      overflow: hidden;
    }
  }
  .operation {
    text-align: right;
    padding: 10px;
    i {
      font-size: 38px;
      color: #000;
      font-weight: 700;
      padding-right: 10px;
    }
  }
  .likes {
    border-top: 1px solid #eee; /*no*/
    padding: 20px 10px 5px;
    i {
      color: #000;
      padding-right: 6px;
      font-size: 34px;
    }
  }
}
</style>
