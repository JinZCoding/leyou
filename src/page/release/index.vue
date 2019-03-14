<template>
  <div>
    <div class="release_header">
      <div>
        <div class="toback" @click="tobackClick">
          <span>
            <i class="iconfont">&#xe629;</i> 返回
          </span>
        </div>
        <div class="header_tit">
          <span></span>
        </div>
        <div class="save" @click="saveClick">
          <span>发表</span>
        </div>
      </div>
    </div>
    <div class="article_info">
      <div class="heading">
        <input type="text" class="article_heading" v-model="title" placeholder="标题">
        <!-- <input type="text" class="address" v-model="address" placeholder="请选择地点"> -->
      </div>
      <div class="address">
        <input
          type="text"
          class="article_address"
          v-model="address"
          readonly
          @click="addressShow=true"
          placeholder="请选择地点"
        >
        <van-popup v-model="addressShow" position="bottom">
          <!-- <van-area
            :area-list="areaList"
            @cancel="onAddressCancel"
            @confirm="onAddressConfirm"
            @change="onAddressChange"
          /> -->
        </van-popup>
      </div>
      <div id="editorContainer">
        <!-- 编辑器容器 -->
      </div>
    </div>

  </div>
</template>

<script src="./dist/js/zx-editor.min.js"></script>
<script>
import { ZxEditor } from "zx-editor";
import areaList from "./areaList.js";
export default {
  name: "release",
  data() {
    return {
      areaList,
      title: "",
      content: "",
      article_type: null,
      address: "",
      addressShow: false
    };
  },
  methods: {
    // 返回
    tobackClick() {
      console.log("取消");
      this.$router.go(-1);
    },
    // 发布
    saveClick() {
      // console.log(this.content);
      this.getCont();
      if (!this.title) {
        this.$toast("请输入标题");
      } else if (!this.content) {
        this.$toast("请输入正文");
      } else {
        console.log(this.content);
        // 调用接口 保存文章
        let objParams = {
          article_type: this.type,
          title: this.title
          // updatetime: ""
        };

        // this.$router.push({ path: "/success" });
      }
    },
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    // 取消确认选择地址
    onAddressCancel() {
      this.addressShow = false;
    },
    // 选择地址
    onAddressConfirm(val) {
      // console.log(val);
      this.address = val[0].name + " " + val[1].name + " " + val[2].name;
      console.log(this.address);
      this.addressShow = false;
    },
    onAddressChange(picker) {
      let val = picker.getValues();
      // console.log(val);
    }
  },
  mounted() {
    var zxEditor = new ZxEditor("#editorContainer", {
      //   fixed: true
      showToolbar: ["emoji", "pic"]
    });
    let that = this;
    that.getCont = is => {
      this.content = zxEditor.getContent(is);
    };
  },
  created() {
    this.article_type = this.$route.query.type;
    console.log(this.article_type);
  }
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";
.release_header {
  z-index: 999;
  width: 100%;
  height: 90px;
  position: fixed;
  user-select: none; //设置文字不能被选中
  text-align: center;
  line-height: 90px;
  background-color: #fff;
  border-bottom: 1px solid #ebedf0; /*no*/
  .header_tit {
    margin: 0 auto;
    max-width: 60%;
    font-size: 30px;
    font-weight: 500;
  }
  .toback,
  .save {
    bottom: 0;
    font-size: 28px;
    position: absolute;
  }
  .toback {
    left: 20px;
    i {
      color: #000;
      font-size: 28px;
    }
  }
  .save {
    right: 30px;
  }
}
.article_info {
  padding-top: 90px;
  background-color: #fff;
  height: 100%;
  .heading {
    position: relative;
    height: 120px;
    // background-color: #fff;
    border-bottom: 1px solid #eee; /*no*/
    margin: 0 20px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    .article_heading,
    .address {
      @include wh(100%, 90px);
      line-height: 90px;
      font-size: 42px;
      &::placeholder {
        font-size: 42px;
      }
    }
  }
  .address {
    position: relative;
    height: 100px;
    border-bottom: 1px solid #eee; /*no*/
    margin: 0 20px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    .article_address {
      @include wh(100%, 80px);
      line-height: 90px;
      font-size: 42px;
      &::placeholder {
        font-size: 38px;
      }
    }
  }
}
.zxeditor-container .zxeditor-content-wrapper {
  min-height: 500px; /*no*/
  padding-top: 10px;
}
.zxeditor-container .zxeditor-content-wrapper.is-empty:before {
  // top: 0;
  top: 10px;
  font-size: 30px;
}
.zxeditor-container .zxeditor-content-wrapper p,
.zxeditor-container .zxeditor-content-wrapper h1,
.zxeditor-container .zxeditor-content-wrapper h2,
.zxeditor-container .zxeditor-content-wrapper h3,
.zxeditor-container .zxeditor-content-wrapper h4,
.zxeditor-container .zxeditor-content-wrapper li {
  padding: 0;
  font-size: 30px;
}
</style>
