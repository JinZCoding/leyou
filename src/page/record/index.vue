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
            :name="item.author"
            :content="item.record_content"
            :imgurl="item.record_img"
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
      list: []
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.$post("/api/leyou/record/queryRecordInfo", {})
        .then(res => {
          console.log(res);
          this.list = res.data;
        })
        .catch(() => {});
    }
  },
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
