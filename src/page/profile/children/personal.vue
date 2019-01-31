<template>
  <div class="personal">
    <div class="personal_header">
      <div>
        <div class="cancel" @click="onClickCancel">
          <span>取消</span>
        </div>
        <div class="header_title">
          <span>设置个人资料</span>
        </div>
        <div class="save" :class="{'no-change': !havechange}" @click="onClickSave">
          <span>保存</span>
        </div>
      </div>
    </div>
    <div class="bg" style="background: url('../../static/img/personal_bg.png') no-repeat center;">
      <div class="avatar">
        <span class="avatar_img">
          <img :src="info.avatar" alt>
        </span>
        <div class="changeavatar">
          <span class="replace" @click="uploadHeadImg">修改头像</span>
          <input
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            @change.stop="handleFile"
            class="hiddenInput"
          >
        </div>
      </div>
    </div>
    <div class="info_table">
      <div>
        <div class="name infoItem">
          <span>昵&emsp;称：</span>
          <input type="text" v-model="info.userName" placeholder="乐游用户">
        </div>
        <div class="sex infoItem">
          <span>性&emsp;别：</span>
          <input type="text" v-model="info.sex" readonly @click="sexShow=true">
        </div>
        <div class="birthday infoItem">
          <span>生&emsp;日：</span>
          <input
            type="date"
            v-model="info.birthday"
            placeholder="选择日期"
            @focus="$event.currentTarget.removeAttribute('placeholder')"
          >
        </div>
        <div class="address infoItem">
          <span>常住地：</span>
          <input type="text" v-model="info.address" readonly @click="addressShow=true">
        </div>
        <div class="autograph infoItem">
          <span>签&emsp;名：</span>
          <input type="text" v-model="info.autograph" placeholder="留下点什么吧~">
        </div>
        <!-- 性别 -->
        <van-actionsheet
          v-model="sexShow"
          :actions="sexs"
          cancel-text="取消"
          @select="onSelect"
          @cancel="onCancel"
        />
        <!-- 地址 -->
        <van-popup v-model="addressShow" position="bottom">
          <van-area
            :area-list="areaList"
            @cancel="onAddressCancel"
            @confirm="onAddressConfirm"
            @change="onAddressChange"
          />
        </van-popup>
      </div>
    </div>
  </div>
</template>
<script>
import { Actionsheet, Dialog, Popup, DatetimePicker, Toast } from "vant";
import { mapGetters, mapActions } from "vuex";
import { apiUrl } from "apiUrl/index";
import areaList from "./areaList.js";

export default {
  data() {
    return {
      areaList,
      //是否修改了内容
      havechange: false,
      sexShow: false,
      addressShow: false,
      sexs: [
        {
          name: "女"
        },
        {
          name: "男"
        },
        {
          name: "保密"
        }
      ],
      oldinfo: {},
      info: {}
    };
  },
  computed: {
    ...mapGetters(["account"])
  },
  mounted() {
    this.initData();
  },
  inject: ["reload"],
  methods: {
    ...mapActions(["resetAccount"]),
    // 初始化信息
    initData() {
      // this.info = this.account;
      // console.log(this.oldinfo);
      this.$post(apiUrl.getUserInfo, { userid: this.account.userid }).then(
        res => {
          console.log(res);
          if (res.result === 1 && res.code === 200) {
            this.info = res.data;
            this.oldinfo.userid = res.data.userid;
            this.oldinfo.userName = res.data.userName;
            this.oldinfo.avatar = res.data.avatar;
            this.oldinfo.sex = res.data.sex;
            this.oldinfo.birthday = res.data.birthday;
            this.oldinfo.address = res.data.address;
            this.oldinfo.autograph = res.data.autograph;
            // console.log("before======>", this.oldinfo);
          } else {
            this.$toast(res.message);
          }
        }
      );
    },
    // 取消确认个人资料
    onClickCancel() {
      if (this.havechange) {
        Dialog.confirm({
          title: "信息已修改",
          message: "确定放弃修改吗？"
        })
          .then(() => {
            // on confirm
            this.$router.go(-1);
          })
          .catch(() => {
            // on cancel
            //取消 就在当页
          });
      } else {
        this.$router.go(-1);
      }
    },
    onClickSave() {
      if (this.havechange) {
        this.$post(apiUrl.setUserChange, this.info).then(res => {
          console.log(res);
          if (res.result === 1 && res.code === 200) {
            // 若用户名修改了，则要同时修改session和vuex中的数据
            if (
              this.info.userName !== this.oldinfo.userName ||
              this.info.avatar !== this.oldinfo.avatar
            ) {
              let obj = {
                userid: this.account.userid,
                userName: this.info.userName,
                avatar: this.info.avatar
              };
              this.resetAccount(obj);
            }
            this.$router.go(-1);
            this.reload();
            setTimeout(function() {
              Toast("信息保存成功");
            }, 1000);
          } else {
            this.$toast(res.message);
          }
        });
      }
    },
    // 取消确认选择地址
    onAddressCancel() {
      this.addressShow = false;
    },
    // 选择地址
    onAddressConfirm(val) {
      // console.log(val);
      this.info.address = val[0].name + " " + val[1].name + " " + val[2].name;
      console.log(this.info.address);
      this.addressShow = false;
    },
    onAddressChange(picker) {
      let val = picker.getValues();
      // console.log(val);
    },
    // 选择性别
    chooseSex(sexIndex) {
      switch (sexIndex) {
        case 1:
          this.info.sex = "女";
          break;
        case 0:
          this.info.sex = "男";
          break;
        case 2:
          this.info.sex = "保密";
          break;
        case 3:
          break;
      }
      this.sexShow = false;
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.info.sex = item.name;
      this.sexShow = false;
    },
    onCancel() {
      this.sexShow = false;
    },
    // 修改头像
    uploadHeadImg() {
      this.$el.querySelector(".hiddenInput").click();
    },
    handleFile(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      var reader = new FileReader();
      reader.onload = data => {
        let res = data.target || data.srcElement;
        this.info.avatar = res.result;
        this.$store.state.account.avatar = res.result;
      };
      reader.readAsDataURL(file);
    }
  },
  computed: {
    ...mapGetters(["account"])
  },
  watch: {
    // 监控信息变化
    info: {
      handler(val, oldVal) {
        // console.log("after====>", this.oldinfo);
        if (
          val.userName === this.oldinfo.userName &&
          val.sex === this.oldinfo.sex &&
          val.avatar === this.oldinfo.avatar &&
          val.birthday === this.oldinfo.birthday &&
          val.address === this.oldinfo.address &&
          val.autograph === this.oldinfo.autograph
        ) {
          // console.log(123123);
          this.havechange = false;
        } else {
          this.havechange = true;
        }
      },
      deep: true
    }
  }
};
</script>
<style lang="scss">
@import "../../../style/mixin.scss";
.personal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100%;
  background-color: #fff;
  z-index: 1000;
  .personal_header {
    height: 90px;
    position: relative;
    user-select: none; //设置文字不能被选中
    text-align: center;
    line-height: 90px;
    background-color: #fff;
    border-bottom: 1px solid #ebedf0; /*no*/
    .header_title {
      margin: 0 auto;
      max-width: 60%;
      font-size: 30px;
      font-weight: 500;
    }
    .cancel,
    .save {
      bottom: 0;
      font-size: 26px;
      position: absolute;
    }
    .cancel {
      left: 30px;
    }
    .save {
      right: 30px;
    }
  }
  .no-change {
    span {
      color: #eee;
    }
  }
  .van-actionsheet {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
}
.changeavatar {
  position: relative;
  .hiddenInput {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
  }
}
.bg {
  @include wh(100%, 330px);
  @include fj(center);
  flex-direction: column;
  align-items: center;
  .avatar {
    @include wh(200px, 330px);
    margin: 0 auto;
    text-align: center;
    span {
      display: block;
    }
    .avatar_img {
      @include wh(130px, 130px);
      margin: 60px auto 40px;
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .replace {
      display: block;
      font-size: 28px;
      color: #fff;
      padding: 10px 10px;
      border: 1px solid #fff;
      border-radius: 30px;
    }
  }
}
.info_table {
  padding: 20px 30px;
  background-color: #fff;
  .infoItem {
    @include wh(100%, 100px);
    line-height: 100px;
    border-bottom: 1px solid #eee;
    span {
      font-size: 32px;
      font-weight: 200;
    }
    input {
      height: 70px;
      line-height: 70px;
      width: 540px;
      font-size: 30px;
    }
  }
  .sex_list {
    li {
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 30px;
      border-bottom: 1px solid #eee;
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
