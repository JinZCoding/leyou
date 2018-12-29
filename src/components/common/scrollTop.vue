<template>
  <a href="javascript:;" class="toTop" @click="backTop" v-show="backToTop">
    <i class="iconfont">&#xe65d;</i>
  </a>
</template>
<script>
export default {
  name: "ScrollTop",
  data() {
    return {
      backToTop: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    backTop() {
      let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop -= 100;
          document.documentElement.scrollTop -= 100;
        } else {
          clearInterval(back);
        }
      });
    },
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //滑动大于500,显示回到顶部图标
      if (scrollTop > 500) {
        this.backToTop = true;
      } else {
        this.backToTop = false;
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>

<style lang="scss">
.toTop {
  position: fixed;
  bottom: 150px;
  right: 30px;
  z-index: 100;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid #999; /*no*/
  text-align: center;
  background-color: #fff;
  i {
    color: #999;
    font-size: 58px;
    vertical-align: middle;
    font-weight: 500;
  }
}
</style>
