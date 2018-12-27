<template>
  <div id="toast" class="toast" v-if="showWrap" :class="showContent ?'fadein':'fadeout'">{{text}}</div>
</template>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  max-width: 350px;
  background: rgba(0, 0, 0, 0.35);
  padding: 10px 15px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
  text-align: justify;
}
.fadein {
  animation: animate_in 0.25s;
}
.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
}
@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>