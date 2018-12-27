<template>
  <div>
    <all-header></all-header>
    <div class="inner">
      <div class="info">
        <h1>haha</h1>
        
      </div>
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
@import '../../style/mixin.scss';
.inner{
  padding-top: 100px;
}
.info{
  h1{
    color: $fc;
  }
  i{
    font-size: 40px;
  }
}
</style>
