<template>
  <div class="login-div">
    <div>
      <div class="login_container">
        <form action="" class="login-form">
          <div class="userid">
            <label for="">账号:</label>
            <input type="text">
          </div>
          <div class="userpwd">
            <label for="">密码:</label>
            <input type="password">
          </div>
        </form>

      </div>

      <div class="bottom_con">
        <p>&copy; jinzhiyi</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/mixin.scss";

.login-div{
  @include wh(300px,400px);
  margin: 50px auto;
  font-size: 18px;
}
.login_container{
  .login-form>div{
    padding-bottom: 10px;
  }
}
input{
  @include wh(220px, 40px);
  border: 1px solid #999;
  border-radius: 5px;
  font-size: 16px;
}
.bottom_con{
  
}
</style>
