<template>
  <div>
    <van-search
      v-model="search"
      placeholder="请输入搜索关键词"
      background="#fedb09"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    ></van-search>
  </div>
</template>
<script>
import AllHeader from "../../components/header/header";
import { Search } from "vant";

export default {
  data() {
    return {
      search: ""
    };
  },
  components: {
    AllHeader
  },
  methods: {
    onSearch() {
      console.log(this.search);
    },
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

.search_content {
  padding: 90px 0;
}
</style>
