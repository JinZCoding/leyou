<template>
  <div class="loading">
    <van-loading/>
  </div>
</template>
<script>
import { Loading } from "vant";
import { mapGetters } from "vuex";
export default {
  name: "loading",
  computed: {
    ...mapGetters["LOADING"]
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../../../style/mixin.scss";

.loading {
  @include fj(center);
}
</style>

