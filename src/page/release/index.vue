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
          />-->
          <van-picker
            show-toolbar
            title="请选择地点"
            :columns="areaList.list"
            @cancel="onCancel"
            @confirm="onAddressConfirm"
          />
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
      title: "", // 题目
      content: "", // 内容
      article_type: null, // 文章类型
      address: "", // 地点
      pinyin: "", // 地点拼音
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
        // console.log(this.content);
        // 调用接口 保存文章
        let objParams = {
          title: this.title,
          content: this.content,
          article_type: this.article_type,
          address: this.address,
          address_pinyin: this.pinyin
        }; 
        console.log(objParams);
        // /leyou/release/releaseArticle
        this.$post("/api/leyou/release/releaseArticle", objParams)
        .then(res => {
          console.log(res);
          // this.swiperImgList = res.data;
          // console.log("swiperlist========>", this.swiperImgList);
        })
        .catch(() => {});
        // this.$router.push({ path: "/success" });
      }
    },
    //
    onAddressConfirm(value, index) {
      // this.$toast(`当前值：${value}, 当前索引：${index}`);
      this.addressShow = false;
      console.log(value, this.areaList.pinyin[index]);
      this.address = value;
      this.pinyin = this.areaList.pinyin[index];
    },
    onCancel() {
      this.addressShow = false;
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
    // console.log(this.article_type);
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
