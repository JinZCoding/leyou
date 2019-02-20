<template>
  <li>
    <router-link :to="'/article/'+article_id" class="article-items">
      <h3 class="title">{{title}}</h3>
      <div class="content clear">
        <dt class="content_cover left">
          <img :src="cover_img" alt>
        </dt>
        <dd class="content_right">
          <div class="summary">{{summary}}</div>
          <div class="extra">
            <span>{{views}}浏览</span>
            <div class="author">
              {{author}}
              <img :src="author_img" alt>
            </div>
          </div>
        </dd>
      </div>
    </router-link>
  </li>
</template>
<script>
export default {
  name: "GuideList",
  data() {
    return {};
  },
  mounted() {},
  props: [
    "article_id",
    "title",
    "cover_img",
    "summary",
    "views",
    "author",
    "author_img"
  ],
  methods: {},
  components: {}
};
</script>
<style lang="scss">
@import "../../../style/mixin.scss";

.guide-list {
  background-color: #fff;
  width: 100%;
}
.article-ul {
  li {
    margin: 0 30px;
    padding: 25px 0;
    border-bottom: 1px solid #eee;
    &:last-child {
      border: none;
    }
    a {
      display: block;
    }
  }
}
.article-items {
  .title {
    padding: 10px 20px 0 0;
    font-size: 36px;
    color: #111;
    line-height: 1.3em;
    position: relative;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content {
    padding: 20px 0 0;
    .content_cover {
      width: 280px;
      img {
        @include wh(100%, 200px);
      }
    }
    .content_right {
      margin-left: 310px;
      height: 200px;
      position: relative;
      span {
        color: #999;
      }
      .summary {
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-height: 1.3em;
        font-size: 28px;
        padding: 12px 0 0;
      }
      .extra {
        height: 22px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 20px;
        line-height: 22px;
        .author {
          display: inline-block;
          position: absolute;
          right: 0;
          //   top: -5px;
          color: #999;
        }
        img {
          @include wh(30px, 30px);
          vertical-align: middle;
          margin: 0 5px 0 5px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
