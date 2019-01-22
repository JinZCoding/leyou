<template>
  <div id="editorContainer">
    <!-- 编辑器容器 -->
  </div>
</template>

<script src="./dist/js/zx-editor.min.js"></script>
<script>
import { ZxEditor } from "zx-editor";
// 初始化ZX编辑器
export default {
  mounted() {
    var zxEditor = new ZxEditor("#editorContainer", {
      //   fixed: true
    });
  }
};
// 详见index.html文件
</script>
<style lang="scss">
.zxeditor-container .zxeditor-toolbar-wrapper {
  top: 0;
}
.zxeditor-content-wrapper {
  margin-top: 100px;
}
</style>
