<template>
  <div>
    <ul>
      <li v-for="(item,index) in datalist" :key="index">
        <h1>
          {{item.personName}}:
          <span>{{item.viewName}}</span>
        </h1>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      datalist: []
    };
  },
  mounted() {
    this.showdata();
  },
  methods: {
    showdata() {
      //		import axios from 'axios'
      //    Vue.prototype.$http = axios  在main.js中把axios添加到vue原型中，则可在每个组件中调用
      this.$get("/user") //全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中
        .then(res => {
          console.log(res);
          this.datalist = res.data;
        })
        .catch(err => {
          console.log("调用失败", err);
        });
    }
  }
};
</script>
