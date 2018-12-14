<template>
  <div class="inner">
    <all-header></all-header>
    <div class="info">
      <h1>haha</h1>
      
    </div>
    <all-footer></all-footer>
  </div>
</template>

<script>
import AllFooter from '../../common/footer/footer'
import AllHeader from '../../common/Header/header'
export default {
  data () {
    return {

    }
  },
  components:{
    AllHeader,
    AllFooter,
  }

}
</script>
<style lang="scss">
@import '../../assets/scss/mixin.scss';
.inner{
  padding-top: 50px;
}
.info{
  h1{
    color: $fc;
  }
  i{
    font-size: 24px;
  }
}
</style>
