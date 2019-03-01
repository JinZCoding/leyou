<template>
  <li class="note-li">
    <router-link :to="'/article/'+article_id">
      <span class="left sort">
        <i class="num">{{index+1}}</i>
      </span>
      <div class="note_title">
        <h3>{{title}}</h3>
        <i class="iconfont in">&#xe88e;</i>
      </div>
      <div class="bottom_info">
        <span class="author">{{author}}</span>
        <span class="address">{{address}}</span>
      </div>
    </router-link>
  </li>
</template>
<script>
export default {
  name: "StrategyList",
  data() {
    return {};
  },
  props: ["index", "article_id", "title", "author", "address"]
};
</script>
<style lang="scss">
@import "../../../style/mixin.scss";
.list {
  margin-top: 20px;
}
.note-li {
  padding: 15px 0;
  // border-bottom: 1px solid #eee; /*no*/
  &:last-child {
    border: none;
  }
  .sort {
    @include wh(40px, 25px);
    // background-color: $fc;
    border-radius: 10px;
    background-color: #ddd;
    .num {
      display: inline-block;
      text-align: center;
      color: #666;
      font-size: 34px;
      font-weight: 500;
      line-height: 16px;
      width: 35px;
      border-radius: 3px;
      text-align: center;
      padding: 0 0 0 10px;
      vertical-align: middle;
    }
  }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    .sort {
      background-color: #ffd000;
    }
  }
  .note_title {
    margin-left: 55px;
    position: relative;
    // display: flex;
    // align-items: center;
    h3 {
      font-size: 34px;
      line-height: 44px;
      padding: 0 40px 0 0;
      display: -webkit-box !important;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .in {
      position: absolute;
      right: 8px;
      top: 0;
    }
  }
  .bottom_info {
    margin: 6px 0 0 55px;
    height: 38px;
    line-height: 38px;
    span {
      color: #999;
      font-size: 24px;
      padding: 0 18px;
      &:first-child {
        padding-left: 0;
        border-right: 1px solid #999;
      }
    }
  }
  i {
    color: #333;
  }
}
</style>
