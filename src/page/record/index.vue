<template>
  <div class="record">
    <all-header banner="随记"></all-header>
    <div class="record_content">
      <div>
        <ul>
          <li
            is="RecordItem"
            v-for="(item, index) in list"
            :key="index"
            :item="item"
            :name="item.name"
            :content="item.content"
            :imgurl="item.img_url"
          ></li>
        </ul>
      </div>
    </div>
    <div class="center_bottom">
      <i class="iconfont">&#xe890;</i>
      <span>带你去东京和巴黎</span>
    </div>
    <all-footer></all-footer>
  </div>
</template>
<script>
import AllFooter from "../../components/footer/footer";
import AllHeader from "../../components/header/header";
import RecordItem from "./children/listinfo";
export default {
  data() {
    return {
      list: [
        {
          avatar: "../../static/img/head_1.jpeg",
          name: "aha",
          content: "你好啊哈哈哈哈哈哈哈哈哈~",
          date: "2019-1-1",
          img_url: "../../static/img/cover.jpeg",
          likes: 4
        },
        {
          avatar: "../../static/img/wa.png",
          name: "haha",
          content:
            "嘿哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈~",
          date: "2019-2-1",
          // img_url: "../../static/img/cover.jpeg",
          likes: 0
        },
        {
          avatar: "../../static/img/shi.png",
          name: "haha",
          content: "哈！北京，我来了！",
          date: "2019-1-9",
          img_url: "../../static/img/beijing.jpeg",
          likes: 21
        }
      ]
    };
  },
  mounted() {},
  components: {
    AllHeader,
    AllFooter,
    RecordItem
  }
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";

.record {
  margin: 90px auto 0;
  padding-bottom: 100px;
  width: 100%;
}
.record_content {
  // background-color: #fff;
}
.center_bottom {
  // background-color: red;
  @include wh(100%, 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  span {
    color: #aaa;
  }
  i {
    color: #aaa;
    font-size: 45px;
  }
}
</style>
