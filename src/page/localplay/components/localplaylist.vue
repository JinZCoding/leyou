<template>
  <div class="localplay-list">
    <div>
      <ul class="localplay-ul">
        <li v-for="(item,index) in articlelist" :key="index">
          <router-link to class="localplay-items">
            <!-- <h4 class="title">{{title}}</h4> -->
            <div class="content clear">
              <div class="content_cover">
                <img src="../../../assets/img/swiper/s2.png" alt>
              </div>
              <div class="content_left">
                <div class="title">{{item.title}}</div>
                <div class="extra">
                  <!-- <span>{{views}}浏览</span> -->
                  <div class="author">
                    <img src="../../../assets/img/wa.png" alt>
                    {{item.author}}
                  </div>
                </div>
              </div>
              <div class="content_bottom">
                <span>
                  <strong>{{item.views}}</strong>浏览
                </span>
                <i class="iconfont" v-if="!item.like" @click="likes(index)">&#xe872;</i>
                <i class="iconfont" v-else>&#xe871;</i>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "LocalplayList",
  data() {
    return {
      articlelist: [
        {
          title: "全网最全的北京攻略呱！",
          author: "呱",
          views: "22.1万",
          like: false
        },
        {
          title: "全网最全的北京攻略呱啊！",
          author: "呱啊",
          views: "22.2万",
          like: false
        },
        {
          title: "全网最全的北京攻略呱啊",
          author: "呱啊w",
          views: "22.2万",
          like: false
        }
      ],
    };
  },
  methods: {
    likes(index) {
      this.articlelist[index].like = true;
    }
  }
};
</script>
<style lang="scss">
@import "../../../style/mixin.scss";
.localplay-list {
  background-color: #fff;
  width: 100%;
}
.localplay-ul {
  li {
    position: relative;
    padding: 0 0 10px;
    border-bottom: 1px solid #eee;
    &:last-child {
      border: none;
    }
    a {
      display: block;
    }
  }
}
.localplay-items {
  .content {
    padding: 20px 0 0;
    .content_cover {
      position: absolute;
      right: 0;
      width: 280px;
      img {
        @include wh(100%, 200px);
        border-radius: 10px;
      }
    }
    .content_left {
      @include wh(380px, 200px);
      position: relative;
      .title {
        color: #333;
        font-weight: 700;
        font-size: 34px;
        line-height: 1.4em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        padding-right: 18px;
      }
      .extra {
        height: 30px;
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        font-size: 20px;
        line-height: 30px;
        .author {
          display: inline-block;
          position: absolute;
          left: 0;
          color: #666;
        }
        img {
          @include wh(30px, 30px);
          vertical-align: middle;
          margin: 0 5px 0 5px;
          border-radius: 50%;
        }
      }
    }
    .content_bottom {
      position: relative;
      @include wh(100%, 40px);
      line-height: 40px;
      margin-top: 5px;
      span {
        display: inline-block;
        width: 150px;
        text-align: right;
        position: absolute;
        right: 50px;
        font-size: 22px;
        strong {
          font-weight: 700;
        }
      }
      i {
        display: inline-block;
        width: 50px;
        text-align: right;
        position: absolute;
        right: 0;
        color: $fc;
      }
    }
  }
}
</style>
