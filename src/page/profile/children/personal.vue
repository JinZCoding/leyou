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
    <div class="info_table">
      <div>
        <div class="name infoItem">
          <span>昵&emsp;称：</span>
          <input type="text" v-model="info.username" placeholder="乐游用户">
        </div>
        <div class="sex infoItem">
          <span>性&emsp;别：</span>
          <input type="text" v-model="info.sex" readonly @click="sexshow=true">
        </div>
        <div class="birthday infoItem">
          <span>生&emsp;日：</span>
          <input
            type="date"
            v-model="info.birthday"
            placeholder="选择日期"
            @focus="$event.currentTarget.removeAttribute('placeholder')"
          >
          <!-- <van-popup v-model="birthshow" position="bottom">
            <van-datetime-picker v-model="info.birthday" type="date" :max-date="minDate"/>
          </van-popup>-->
        </div>
        <div class="address infoItem">
          <span>常住地：</span>
          <input type="text" v-model="info.address">
        </div>
        <div class="autograph infoItem">
          <span>签&emsp;名：</span>
          <input type="text" v-model="info.autograph" placeholder="留下点什么吧~">
        </div>
        <van-popup v-model="sexshow" position="bottom">
          <ul class="sex_list">
            <li @click="chooseSex(1)">女</li>
            <li @click="chooseSex(0)">男</li>
            <li @click="chooseSex(2)">保密</li>
            <li @click="chooseSex(3)">取消</li>
          </ul>
        </van-popup>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog, Popup, DatetimePicker } from "vant";
export default {
  data() {
    return {
      havechange: false,
      sexshow: false,
      birthshow: false,
      maxDate: new Date(),
      currentDate: new Date(),
      info: {
        username: "阿圣啊嗷嗷",
        sex: "女",
        birthday: "",
        address: "",
        autograph: ""
      }
    };
  },
  methods: {
    onClickCancel() {
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
    },
    onClickSave() {
      if (this.havechange) {
        this.$toast("保存");
      }
    },
    onChange(picker, value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
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
      this.sexshow = false;
    }
  }
};
</script>
<style lang="scss">
@import "../../../style/mixin.scss";
.personal {
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
}
.info_table {
  padding: 20px 30px;
  background-color: #fff;
  .infoItem {
    @include wh(100%, 100px);
    line-height: 100px;
    border-bottom: 1px solid #eee;
    &:last-child {
      // border: none;
    }
    span {
      font-size: 32px;
      font-weight: 200;
    }
    input {
      height: 70px;
      line-height: 70px;
      width: 540px;
    }
  }
  .van-popup {
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
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
.van-overlay {
  background-color: rgba(0, 0, 0, 0.05);
}
.van-dialog {
  border-radius: 20px;
  width: 70%;
  .van-button {
    color: #1989fa;
    &.van-dialog__cancel {
      span {
        font-weight: 700;
      }
    }
  }
}
</style>
