<template>
  <div>
    <ul>
      <van-cell-group>
        <van-field v-model="id" placeholder="请输入用户名"/>
      </van-cell-group>
      <van-button type="default" @click="getData">默认按钮</van-button>
      <span>{{data}}</span>
    </ul>
  </div>
</template>
<script>
import { Button, Field } from "vant";

export default {
  name: "demo",
  data() {
    return {
      data: "",
      id: ""
    };
  },
  mounted() {
    // this.showdata();
  },
  methods: {
    getData() {
      this.$get("/api/login", { id: this.id })
        .then(res => {
          console.log("res=====>", res);
          this.data = res;
        })
        .catch(err => {
          console.log(err);
        });
    }
    // showdata() {
    //   this.$get("/api/login")
    //     .then(res => {
    //       console.log(res);
    //       this.data = res.data;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>
