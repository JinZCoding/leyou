<template>
  <div class="login-div">
    <div>
      <div class="login_header">
        <span class="colseLogin" @click="colseLogin">
          <i class="iconfont">&#xe86e;</i>
        </span>
        <h2>注册</h2>
      </div>
      <div class="login_container">
        <div class="userId">
          <label for>
            <span>
              <img src="../../assets/img/id.png" alt>
            </span>
          </label>
          <input type="text" v-model="userId" placeholder="请输入账号">
          <span class="del" @click="userId=''">
            <img v-show="userId" src="../../assets/img/del@3x.png" alt>
          </span>
        </div>
        <div class="loginPassword">
          <label for>
            <span>
              <img src="../../assets/img/pass.png" alt>
            </span>
          </label>
          <input type="password" v-model="loginPassword" placeholder="请输入密码" v-if="!showPass">
          <input type="text" v-model="loginPassword" placeholder="请输入密码" v-else>
          <span class="show_pass" @click="showPass=!showPass">
            <img v-if="!showPass" src="../../assets/img/close@3x.png" alt>
            <img v-else src="../../assets/img/open@3x.png" alt>
          </span>
        </div>
        <div class="loginPassword2">
          <label for>
            <span>
              <img src="../../assets/img/pass.png" alt>
            </span>
          </label>
          <input type="password" v-model="loginPassword2" placeholder="确认密码" v-if="!showPass2">
          <input type="text" v-model="loginPassword2" placeholder="确认密码" v-else>
          <span class="show_pass" @click="showPass2=!showPass2">
            <img v-if="!showPass2" src="../../assets/img/close@3x.png" alt>
            <img v-else src="../../assets/img/open@3x.png" alt>
          </span>
        </div>
        <span class="go_login">
          已有账号，点击
          <a @click="goLogin">登录</a>
        </span>
      </div>
      <div class="loginButton" @click="register">
        <a>注册</a>
      </div>
      <div class="bottom_con">
        <p>&copy; jinzhiyi</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; //先要引入
import { apiUrl } from "apiUrl/index";

export default {
  data() {
    return {
      userId: "",
      loginPassword: "",
      loginPassword2: "",
      showPass: false,
      showPass2: false
    };
  },
  mounted() {},
  computed: {},
  methods: {
    // 注册
    register() {
      console.log("zhuce");
      if (this.userId && this.loginPassword && this.loginPassword) {
        console.log(this.userId, this.loginPassword, this.loginPassword);
        if (this.loginPassword !== this.loginPassword2) {
          this.$toast("确认密码失败，请重新输入");
        } else {
          console.log("...");
          this.$post("/api/leyou/user/register", {
            userid: this.userId,
            password: this.loginPassword
          })
            .then(res => {
              console.log("res====>", res);
              this.$router.replace({ path: "/login" });
            })
            .catch(err => {});
        }
      } else if (this.userId && !this.loginPassword) {
        this.$toast("请输入密码");
      } else {
        this.$toast("请输入账号");
      }
    },
    goLogin() {
      this.$router.replace({ path: "/login" });
      // this.$router.go(-1);
    },
    // 关闭页面
    colseLogin() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";

.login_header {
  position: relative;
  @include wh(100%, 340px);
  // line-height: 240px;
  background: rgba(255, 186, 51, 0.6);
  @include bis("./src/assets/img/login_bk.png");
  .colseLogin {
    position: absolute;
    right: 20px;
    top: 20px;
    i {
      font-size: 46px;
      color: #fff;
    }
  }
  h2 {
    font-size: 50px;
    color: #fff;
    position: absolute;
    bottom: 70px;
    @include cl;
  }
}
input {
  @include wh(220px, 40px);
  border: none;
  padding: 0 5px;
}
.login_container {
  width: 516px;
  margin: 76px auto 40px;
  padding-top: 52px;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #ababab;
  letter-spacing: 0;
  text-align: center;
  & > div {
    // height: 60px;
    line-height: 60px;
    margin: 50px 0;
    border-bottom: 1px solid #dee0e2; /*no*/
  }
  label {
    display: inline-block;
    width: 78.5px;
    img {
      height: 35px;
      margin-bottom: -6px;
    }
  }
  input {
    display: inline-block;
    @include wh(380px, 60px);
    padding: 0 5px;
    background: none;
  }
  .go_login {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    a {
      color: $fc;
    }
  }
}
.del,
.show_pass {
  display: inline-block;
  @include wh(30px, 30px);
  img {
    width: 30px;
    margin-bottom: -5px;
  }
}
.loginButton {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  a {
    display: block;
    width: 622px;
    height: 83px;
    line-height: 83px;
    background-image: linear-gradient(
      -90deg,
      rgb(255, 186, 51) 0%,
      rgb(253, 187, 49) 100%
    );
    box-shadow: 0 0 25px rgba(255, 186, 51, 0.5);
    border-radius: 41.5px;
    font-family: MicrosoftYaHei;
    font-size: 36px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 89px;
  }
}
.bottom_con {
  display: none;
}
</style>
