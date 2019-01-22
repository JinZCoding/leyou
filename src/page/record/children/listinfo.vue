<template>
  <li class="record_li">
    <div class="left_avatar">
      <img src="../../../assets/img/head_1.jpeg" alt width="50px">
    </div>
    <div class="right_info">
      <span class="name ellipsis">{{name}}</span>
      <p class="content">{{content}}</p>
      <p class="time">2019-1-1</p>
      <div class="operation">
        <div class="extra_opera" v-if="operationShow">
          <span class="to_like">
            <i class="iconfont">&#xe8e5;</i>赞
          </span>
          <span class="to_comment">
            <i class="iconfont">&#xe60d;</i>评论
          </span>
        </div>
        <span class="more_opera" @click="">
          <i class="iconfont">&#xe814;</i>
        </span>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: "RecordItem",
  data() {
    return {
      operationShow: false
    };
  },
  props: ["name", "content"]
};
</script>
<style lang="scss">
@import "../../../style/mixin.scss";

.record_li {
  position: relative;
  margin: 10px 10px;
  padding: 20px 20px 20px;
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
      border-radius: 10px;
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
    .content {
      padding: 10px 0;
      font-size: 28px;
    }
    .time {
      padding-top: 20px;
      color: #666;
    }
  }
}
.operation {
  @include fj(flex-end);
  align-items: center;
  text-align: center;
  margin-top: -35px;
  .extra_opera {
    display: inline-block;
    background: rgba(0, 0, 0, 0.8);
    height: 58px;
    line-height: 58px;
    padding: 0 20px;
    border-radius: 5px;
    span {
      color: #fff;
      font-size: 28px;
    }
    i {
      font-size: 32px;
      color: #fff;
      padding-right: 12px;
    }
    .to_like {
      padding-right: 20px;
    }
  }
  .more_opera {
    display: inline-block;
    @include wh(55px, 38px);
    line-height: 38px;
    background: rgba(0, 0, 0, 0.08);
    margin-left: 40px;
    border-radius: 5px;
  }
}
</style>
