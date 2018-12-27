<template>
    <div class="footer">
        <div class="footer_left">
            <i class="iconfont">&#xe8e3;</i>
            <span>首页</span>
        </div>
        <div class="footer_right">
            <i class="iconfont">&#xe8a0;</i>
            <span>我的</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"allFooter",
    data(){
        return{

        }
    },
    
}
</script>
<style lang="scss">
@import '../../style/mixin.scss';

.footer{
    position: fixed;
    background: $bg;
    @include wh(100%, 100px);
    @include fj(space-around);
    align-items: center;
    border-top: 1px solid #eee;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 34px;
    &:first-child{
        border-right: 1px solid #fff;
    }
    i{
        font-size: 40px;
        color: $fc;
    }
}
</style>

